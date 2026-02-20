/**
 * ARTEMIS Service Worker
 * Caches CDN resources for fast subsequent loads.
 * Core strategy: cache-first for CDN assets, network-first for HTML.
 */

const CACHE_VERSION = 'v1';
const STATIC_CACHE  = `artemis-static-${CACHE_VERSION}`;
const CDN_CACHE     = `artemis-cdn-${CACHE_VERSION}`;
const ALL_CACHES    = [STATIC_CACHE, CDN_CACHE];

// Local files to cache immediately on install
const STATIC_ASSETS = [
    './artemis.html',
    './artemis_ja.html',
];

// External CDN scripts to pre-cache (same versions pinned in HTML)
const CDN_PREFETCH = [
    'https://cdn.plot.ly/plotly-2.27.0.min.js',
    'https://d3js.org/d3.v7.min.js',
    'https://cdn.jsdelivr.net/npm/d3-cloud@1.2.7/build/d3.layout.cloud.min.js',
    'https://cdn.jsdelivr.net/npm/d3-sankey@0.12.3/dist/d3-sankey.min.js',
    'https://cdn.jsdelivr.net/npm/papaparse@5.4.1/papaparse.min.js',
    'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
];

// ─── Install: pre-populate caches ────────────────────────────────────────────
self.addEventListener('install', event => {
    event.waitUntil(
        Promise.all([
            // Static HTML files (network request, ignore failures)
            caches.open(STATIC_CACHE).then(cache =>
                Promise.allSettled(STATIC_ASSETS.map(url =>
                    fetch(url).then(r => r.ok ? cache.put(url, r) : null).catch(() => null)
                ))
            ),
            // CDN scripts (cors request, ignore failures for individual items)
            caches.open(CDN_CACHE).then(cache =>
                Promise.allSettled(CDN_PREFETCH.map(url =>
                    fetch(url, { mode: 'cors' })
                        .then(r => { if (r.ok) return cache.put(url, r); })
                        .catch(() => null)
                ))
            ),
        ])
    );
    self.skipWaiting();
});

// ─── Activate: clean up old caches ───────────────────────────────────────────
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(names =>
            Promise.all(
                names
                    .filter(n => !ALL_CACHES.includes(n))
                    .map(n => caches.delete(n))
            )
        )
    );
    self.clients.claim();
});

// ─── Fetch: routing strategy ──────────────────────────────────────────────────
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Only handle GET requests
    if (request.method !== 'GET') return;

    // HTML files → network-first (stay fresh), fall back to cache
    if (url.pathname.endsWith('.html')) {
        event.respondWith(
            fetch(request)
                .then(response => {
                    const clone = response.clone();
                    caches.open(STATIC_CACHE).then(c => c.put(request, clone));
                    return response;
                })
                .catch(() => caches.match(request))
        );
        return;
    }

    // PyScript / Pyodide resources (pyscript.net, cdn.jsdelivr.net for pyodide)
    // → Cache-first: these are large WASM files, heavily benefit from caching
    const isCacheable =
        url.hostname === 'pyscript.net' ||
        url.hostname === 'cdn.jsdelivr.net' ||
        url.hostname === 'cdn.plot.ly' ||
        url.hostname === 'd3js.org' ||
        url.hostname === 'huggingface.co' ||
        url.hostname === 'cdn-lfs.huggingface.co';

    if (isCacheable) {
        event.respondWith(
            caches.open(CDN_CACHE).then(cache =>
                cache.match(request).then(cached => {
                    if (cached) return cached;
                    return fetch(request).then(response => {
                        // Only cache valid responses (not opaque/error)
                        if (response.status === 200) {
                            cache.put(request, response.clone());
                        }
                        return response;
                    });
                })
            )
        );
    }
});
