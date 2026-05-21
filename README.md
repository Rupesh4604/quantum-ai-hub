# Quantum AI Hub

> A curated, living index of papers, architectures, and advances at the intersection of **Quantum Computing**, **Deep Learning**, **LLMs**, and **Vision** — covering both **fully quantum networks** and **hybrid quantum-classical models**.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-brightgreen)](https://rupesh-iitb.github.io/quantum-ai-hub)

---

## 🔬 What's Covered

| Domain                        | Examples                                                       |
| ----------------------------- | -------------------------------------------------------------- |
| **Quantum NLP / LLMs**        | Quixer, HyQuT, QTHA, DisCoCat, lambeq, Quantum-PEFT            |
| **Quantum Vision**            | QViT (Cherrat 2024), QCNN, QMAE, Quanvolutional Networks       |
| **Quantum Generative Models** | QuDDPM, MSQuDDPM, Quantum Boltzmann Machines                   |
| **Quantum Algorithms**        | HHL, QSVT, ADAPT-VQE, TETRIS-ADAPT, Quantum MCMC               |
| **Theory**                    | Barren Plateaus (DLA), Dequantization, Concentration           |
| **Hardware**                  | Google Willow, Quantinuum Helios, IBM Heron, D-Wave Advantage2 |

---

## 📁 Site Structure

```
quantum-ai-hub/
├── index.html                      ← Main page: timeline, hardware, conferences
├── papers/
│   ├── qvit-cherrat-2024.html      ← Quantum Vision Transformers (RBS gates)
│   ├── barren-plateaus-dla.html    ← Barren Plateaus via DLA (Ragone/Cerezo)
│   ├── hybrid-transformers.html    ← Quixer, HyQuT, QTHA
│   ├── quddpm.html                 ← Quantum Diffusion (QuDDPM, MSQuDDPM)
│   ├── hhl-qsvt.html               ← HHL & QSVT: Quantum Linear Algebra
│   └── discocat-lambeq.html        ← DisCoCat & lambeq: Compositional Quantum NLP
├── assets/
│   ├── css/style.css               ← Shared dark-theme stylesheet
│   └── js/main.js                  ← Search, filtering, animations
└── .github/workflows/pages.yml     ← Auto-deploy to GitHub Pages
```

---

## 📐 Features

- **MathJax 3** — LaTeX equations rendered in-browser (no server needed)
- **Full-text search** — Press `/` or `Ctrl+K` to search all papers
- **Tag filtering** — Filter by NLP, Vision, Theory, Hardware, etc.
- **Dark academic theme** — Quantum-inspired purple/cyan color scheme
- **Architecture diagrams** — ASCII/text circuit diagrams for all major architectures
- **Hardware section** — Google Willow, Quantinuum Helios, IBM Heron, D-Wave
- **Conference table** — QIP, NeurIPS, ICML, APS March, IEEE QCE, etc.

---

## 📖 Paper Sub-pages (with equations & diagrams)

Each paper page includes:

- Full mathematical derivations (LaTeX via MathJax)
- Architecture diagrams (ASCII format, renders in all browsers)
- Complexity analysis
- Open bottlenecks and research frontiers
- Cross-links to related papers

---

## 🔧 Adding New Papers

To add a paper, edit `assets/js/main.js`:

```javascript
{ year: 2026, title: "Your Paper Title", authors: "Author et al.",
  tags: ["hybrid", "vision"], url: "https://arxiv.org/abs/XXXX.XXXXX",
  page: "papers/your-paper.html" }
```

Then add the entry to `index.html` in the appropriate year group.

---

## 📚 Key Topics & Papers

### Quantum NLP & LLMs

- **DisCoCat** (Coecke et al. 2010) — Categorical compositional semantics
- **lambeq** (Kartsaklis et al. 2021) — Python library for Quantum NLP
- **Quixer** (2024) — Full quantum self-attention via QRAM
- **HyQuT** (2024) — Hybrid quantum transformer (quantum V)
- **QTHA** (2024) — Token-level hybrid attention
- **Quantum-PEFT** (2025) — LoRA-style quantum fine-tuning

### Quantum Vision

- **QCNN** (Cong, Choi, Lukin 2019) — Quantum convolutional networks
- **QViT** (Cherrat et al. 2024) — RBS-gate ViT with orthogonal layers
- **QMAE** (2025) — Quantum masked autoencoders for SSL

### Quantum Generative Models

- **QuDDPM** (2024) — Quantum score network replaces U-Net
- **MSQuDDPM** (2024) — Multi-scale extension
- **Quantum Boltzmann Machines** — Gibbs sampling via quantum MCMC

### Foundational Algorithms

- **HHL** (2009) — Exponential speedup for linear systems
- **QSVT** (2019) — Unified quantum algorithm framework
- **Quantum MCMC** (Layden et al. Nature 2023)

### Theory & Bottlenecks

- **Barren Plateaus** (Ragone-Larocca 2024; Cerezo 2025) — DLA dimension theory
- **Dequantization** (Tang 2019) — Classical algorithms matching QML claims
- **Kernel concentration** (Thanasilp et al. 2023)

---

## 🏛️ Maintained By

**Rupesh** | IIT Bombay | 24m0319@iitb.ac.in, rupesh32003@gamil.com

Last updated: May 2026
