# 🛰️ ARTEMIS - Browser-Based Patent Analysis Tool

[English](README.md) | [日本語](README.ja.md)

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyScript](https://img.shields.io/badge/PyScript-2024.1.1-green.svg)](https://pyscript.net/)

**ARTEMIS** is a browser-based patent analysis application powered by PyScript (Pyodide). It runs entirely in the browser without requiring a server-side Python environment — just a single HTML file.

- **Author**: Hajime Kumami
- **Based on**: [APOLLO](https://github.com/shibayamalicht/apollo-patent-analysis) by shibayamalicht

> ⚠️ **Note**: ARTEMIS is a lightweight version of APOLLO. Some features (EAGLE, NEBULA, etc.) are not included. For full functionality, please use [APOLLO](https://github.com/shibayamalicht/apollo-patent-analysis).

## ✨ Features

- 🌐 **Fully Browser-Based**: No server required — just open the HTML file
- 📊 **Rich Visualization**: Interactive charts with Plotly.js + D3.js
- 🤖 **SBERT Embeddings**: Semantic clustering with Transformers.js (all-MiniLM-L6-v2)
- 🔍 **Advanced Boolean Search**: AND/OR/NEAR/ADJ operators supported
- 🗺️ **Technology Map**: Landscape visualization with TF-IDF/SBERT + PCA/t-SNE (draggable labels, pan/zoom)
- 🔗 **Network Analysis**: Visualize inventor/applicant relationships
- ☁️ **Word Cloud**: Keyword visualization with D3-cloud
- 📈 **Various Charts**: Bar, line, bubble, treemap, lifecycle analysis

## 🌐 Online Demo

**Try it now!** No installation required — use it directly from your browser:

👉 **[ARTEMIS Online](https://ipscience.github.io/artemis/artemis.html)**

> Just open in your browser and start analyzing patents. Drag & drop your CSV file to get started.

## 🚀 Quick Start

1. Open `artemis.html` in your browser
2. Drag & drop or upload a CSV file
3. Configure column mapping (auto-detection supported)
4. Launch the analysis engine

## 📦 Modules

| Module | Function |
|--------|----------|
| **Dashboard** | Data loading & summary display |
| **Preprocessing** | Column settings & engine launch |
| **Statistical Charts** | Time series analysis & rankings (8 chart types) |
| **Logic Analysis** | Rule-based classification (AND/OR/NEAR/ADJ Boolean logic) |
| **Text Analysis** | Word cloud, N-gram, TF-IDF |
| **Technology Map** | Technology landscape visualization (TF-IDF + PCA) |
| **Keywords** | Keyword trends, KWIC search, co-occurrence analysis |
| **Network** | Inventor/applicant network, Sankey diagrams |
| **Advanced** | Circle packing & advanced visualization |
| **Geography** |  Country/region choropleth & bubble map |
| **Export** | CSV/JSON/HTML report output + **Excel (.xlsx)** |

## 🛠️ Tech Stack

### Frontend
- **PyScript 2024.1.1** - Python execution in browser
- **Plotly.js 2.27.0** - Interactive charts
- **D3.js v7** - Word cloud, network, Sankey diagrams
- **PapaParse 5.4.1** - CSV parsing
- **SheetJS (xlsx.js) 0.18.5** - Excel export
- **Transformers.js** - SBERT embeddings in browser (all-MiniLM-L6-v2)
- **Service Worker** - CDN asset caching for faster repeated loads

### Python (Pyodide)
- **pandas** - Data processing
- **numpy** - Numerical computation
- **scikit-learn** - TF-IDF, PCA, t-SNE (background loading)

## 📁 Project Structure

```
artemis/
├── artemis.html      # English version (default)
├── artemis_ja.html   # Japanese version
├── README.md         # English README (this file)
├── README.ja.md      # Japanese README
└── LICENSE.txt       # MIT License
```

## 📋 Requirements

- **Browser**: Chrome, Firefox, Edge, Safari (WebAssembly compatible)
- **Internet**: Required on first launch to download libraries (cached afterwards)
- **Recommended RAM**: 4GB or more

## 🎨 UI Features

- **Dark Theme**: Eye-friendly modern design
- **Glassmorphism**: Semi-transparent cards & panels
- **Responsive**: Desktop, tablet & **mobile** (hamburger menu at ≤600px)
- **Animations**: Smooth transition effects
- **Toast Notifications**: Real-time processing status
- **Column Memory**: Column mapping auto-saved to `localStorage`
- **Language Switcher**: EN ⇌ JA toggle in the header

## 📄 License

MIT License - See [LICENSE.txt](LICENSE.txt) for details

## 🙏 Acknowledgments

- [PyScript](https://pyscript.net/) - Python execution in browser
- [Pyodide](https://pyodide.org/) - WebAssembly Python
- [Plotly.js](https://plotly.com/javascript/) - Interactive charts
- [D3.js](https://d3js.org/) - Data visualization library
- [PapaParse](https://www.papaparse.com/) - CSV parsing
- [Transformers.js](https://huggingface.co/docs/transformers.js/) - ML models in browser
