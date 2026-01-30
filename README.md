# 🛰️ ARTEMIS - ブラウザベース特許分析ツール

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyScript](https://img.shields.io/badge/PyScript-2024.1.1-green.svg)](https://pyscript.net/)

**ARTEMIS**は、PyScript (Pyodide) を活用したブラウザベースの特許分析アプリケーションです。サーバーサイドのPython環境を必要とせず、HTMLファイル単体で動作します。

- **作成者**: Hajime Kumami
- **ベースプロジェクト**: [APOLLO](https://github.com/shibayamalicht/apollo-patent-analysis) by しばやま (shibayamalicht)

> ⚠️ **注意**: ARTEMISはAPOLLOの軽量版であり、一部機能（SBERT、EAGLE、NEBULA等）は含まれていません。フル機能が必要な場合は[APOLLO](https://github.com/shibayamalicht/apollo-patent-analysis)をご利用ください。

## ✨ 特徴

- 🌐 **完全ブラウザベース**: サーバー不要、HTMLファイルを開くだけで動作
- 📊 **豊富な可視化**: Plotly.js + D3.jsによるインタラクティブチャート
- 🔍 **高度な論理検索**: AND/OR/NEAR/ADJ演算子対応
- 🗺️ **技術マップ**: TF-IDF + PCA/t-SNEによるランドスケープ可視化
- 🔗 **ネットワーク分析**: 発明者・出願人の関係性を可視化
- ☁️ **ワードクラウド**: D3-cloudによるキーワード可視化
- 📈 **多彩なチャート**: 棒グラフ、折れ線、バブル、Treemap、ライフサイクル分析

## 🚀 クイックスタート

1. `artemis.html`をブラウザで開く
2. CSVファイルをドラッグ＆ドロップまたはアップロード
3. カラムマッピングを設定（自動検出対応）
4. 分析エンジンを起動

## 📦 モジュール一覧

| モジュール | 機能 |
|-----------|------|
| **ダッシュボード** | データ読み込み・サマリー表示 |
| **前処理** | カラム設定・分析エンジン起動 |
| **統計チャート** | 時系列分析・ランキング（8種類のチャート） |
| **論理分析** | ルールベース分類 (AND/OR/NEAR/ADJブール論理) |
| **テキスト分析** | ワードクラウド・N-gram・TF-IDF |
| **技術マップ** | 技術ランドスケープ可視化 (TF-IDF + PCA) |
| **キーワード** | キーワードトレンド・KWIC検索・共起分析 |
| **ネットワーク** | 発明者/出願人ネットワーク・Sankey図 |
| **アドバンスド** | サークルパッキング・高度な可視化 |
| **エクスポート** | CSV/JSON/HTMLレポート出力 |

## 🛠️ 技術スタック

### フロントエンド
- **PyScript 2024.1.1** - ブラウザでのPython実行
- **Plotly.js 2.27.0** - インタラクティブチャート
- **D3.js v7** - ワードクラウド・ネットワーク・Sankey図
- **PapaParse 5.4.1** - CSV解析

### Python (Pyodide)
- **pandas** - データ処理
- **numpy** - 数値計算
- **scikit-learn** - TF-IDF・PCA・t-SNE（バックグラウンドロード）

## 📁 プロジェクト構成

```
artemis/
├── artemis.html    # メインアプリケーション（単一ファイル）
├── README.md       # このファイル
└── LICENSE         # MITライセンス
```

## 📋 動作要件

- **ブラウザ**: Chrome, Firefox, Edge, Safari (WebAssembly対応)
- **インターネット**: 初回起動時にライブラリをダウンロード（以降はキャッシュ）
- **推奨メモリ**: 4GB以上

## 🎨 UI特徴

- **ダークテーマ**: 目に優しいモダンなデザイン
- **グラスモーフィズム**: 半透明のカード・パネル
- **レスポンシブ**: デスクトップ・タブレット対応
- **アニメーション**: スムーズなトランジション効果
- **トースト通知**: 処理状況のリアルタイム表示

## 📄 ライセンス

MIT License - 詳細は [LICENSE.txt](LICENSE.txt) を参照

## 🙏 謝辞

- [PyScript](https://pyscript.net/) - ブラウザでのPython実行
- [Pyodide](https://pyodide.org/) - WebAssembly版Python
- [Plotly.js](https://plotly.com/javascript/) - インタラクティブチャート
- [D3.js](https://d3js.org/) - データ可視化ライブラリ
- [PapaParse](https://www.papaparse.com/) - CSV解析
