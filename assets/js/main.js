/* ============================================================
   Quantum AI Hub — Main JS
   Search, filtering, interactions
   ============================================================ */

// ---- Paper data (used for search) ----
const PAPERS = [
  // 2019
  // Tang 2019: arXiv:1811.00414 = "A quantum-inspired classical algorithm for recommendation systems"
  { year: 2019, title: "A Quantum-Inspired Classical Algorithm for Recommendation Systems (Dequantization)", authors: "Tang", tags: ["theory","algo"], url: "https://arxiv.org/abs/1811.00414", key: "tang2019" },
  // 2021
  { year: 2021, title: "lambeq: An Efficient High-Level Python Library for Quantum NLP", authors: "Kartsaklis et al.", tags: ["nlp"], url: "https://arxiv.org/abs/2110.04236", key: "lambeq2021" },
  // ADAPT-VQE: arXiv:1812.11173 — no dedicated sub-page yet, links to arXiv
  { year: 2021, title: "ADAPT-VQE: Adaptive Derivative-Assembled Pseudo-Trotter VQE", authors: "Grimsley et al.", tags: ["algo"], url: "https://arxiv.org/abs/1812.11173", key: "adaptvqe2021" },
  // 2022
  { year: 2022, title: "Quantum Convolutional Neural Networks", authors: "Cong, Choi, Lukin", tags: ["vision","theory"], url: "https://arxiv.org/abs/1810.03912", key: "qcnn2022" },
  { year: 2022, title: "TETRIS-ADAPT-VQE: Problem-Tailored Variational Algorithm", authors: "Anastasiou et al.", tags: ["algo"], url: "https://arxiv.org/abs/2209.10926", key: "tetris2022" },
  // 2023
  // ✅ VERIFIED arXiv:2203.12497 — Nature 619, 282–287 (2023)
  { year: 2023, title: "Quantum-Enhanced Markov Chain Monte Carlo", authors: "Layden, Mazzola, Mishmash, Motta et al.", tags: ["algo","hybrid"], url: "https://arxiv.org/abs/2203.12497", key: "layden2023", page: "../papers/hhl-qsvt.html" },
  { year: 2023, title: "Exponential Concentration in Quantum Kernel Methods", authors: "Thanasilp et al.", tags: ["theory"], url: "https://arxiv.org/abs/2208.11060", key: "thanasilp2023" },
  // 2024
  { year: 2024, title: "Quantum Vision Transformers (QViT)", authors: "Cherrat, Kerenidis, Mathur et al.", tags: ["vision","hybrid"], url: "https://arxiv.org/abs/2209.08167", key: "cherrat2024", page: "../papers/qvit-cherrat-2024.html" },
  { year: 2024, title: "A Lie Algebraic Theory of Barren Plateaus for Deep Parameterized Quantum Circuits", authors: "Ragone, Bakalov, Sauvage, Larocca, Cerezo et al.", tags: ["theory"], url: "https://arxiv.org/abs/2309.09342", key: "ragone2024", page: "../papers/barren-plateaus-dla.html" },
  // ✅ VERIFIED arXiv:2406.04305 — Khatri, Matos, Coopmans et al.
  { year: 2024, title: "Quixer: A Quantum Transformer Model", authors: "Khatri, Matos, Coopmans et al.", tags: ["nlp","hybrid"], url: "https://arxiv.org/abs/2406.04305", key: "quixer2024", page: "../papers/hybrid-transformers.html" },
  { year: 2024, title: "QTHA: Quantum Token-based Hybrid Attention", authors: "Various", tags: ["nlp","hybrid"], url: "#", key: "qtha2024", page: "../papers/hybrid-transformers.html" },
  // ✅ VERIFIED arXiv:2310.05866 — "Generative QML via Denoising Diffusion Probabilistic Models"
  { year: 2024, title: "Generative Quantum Machine Learning via Denoising Diffusion Probabilistic Models (QuDDPM)", authors: "Cacioppo, Bordoni et al.", tags: ["gen","hybrid"], url: "https://arxiv.org/abs/2310.05866", key: "quddpm2024", page: "../papers/quddpm.html" },
  // ✅ VERIFIED arXiv:2411.17608 — Mixed-State QuDDPM (MSQuDDPM), Nov 2024
  { year: 2024, title: "Mixed-State Quantum Denoising Diffusion Probabilistic Model (MSQuDDPM)", authors: "Various", tags: ["gen","hybrid"], url: "https://arxiv.org/abs/2411.17608", key: "msquddpm2024", page: "../papers/quddpm.html" },
  { year: 2024, title: "Google Willow: Below-Threshold Quantum Error Correction", authors: "Google Quantum AI", tags: ["hw","news"], url: "https://arxiv.org/abs/2412.14256", key: "willow2024" },
  // 2025
  // ✅ VERIFIED arXiv:2405.00781 — Larocca, Thanasilp, Wang, Cerezo et al. (2024, updated 2025)
  { year: 2025, title: "Barren Plateaus in Variational Quantum Computing (Review)", authors: "Larocca, Thanasilp, Wang, Cerezo et al.", tags: ["theory"], url: "https://arxiv.org/abs/2405.00781", key: "cerezo2025", page: "../papers/barren-plateaus-dla.html" },
  // ✅ VERIFIED arXiv:2511.10653 — HyQuT "Hybrid Quantum Transformer for Language Generation", Kong et al., Nov 2025
  { year: 2025, title: "HyQuT: Hybrid Quantum Transformer for Language Generation", authors: "Kong et al.", tags: ["nlp","hybrid"], url: "https://arxiv.org/abs/2511.10653", key: "hyqut2025", page: "../papers/hybrid-transformers.html" },
  { year: 2025, title: "Quantum-PEFT: Parameter-Efficient Fine-Tuning for QNN", authors: "Various", tags: ["nlp","hybrid"], url: "#", key: "qpeft2025" },
  { year: 2025, title: "QMAE: Quantum Masked Autoencoders", authors: "Various", tags: ["vision","hybrid"], url: "#", key: "qmae2025" },
  { year: 2025, title: "FNQS: Foundation Networks for Quantum Systems", authors: "Various", tags: ["hybrid","theory"], url: "#", key: "fnqs2025" },
  { year: 2025, title: "Quantinuum Helios: 56-Qubit Trapped-Ion Processor", authors: "Quantinuum", tags: ["hw","news"], url: "https://www.quantinuum.com/hardware/helios", key: "helios2025" },
  { year: 2025, title: "Classical Shadows for Quantum Foundation Models", authors: "Various", tags: ["theory","hybrid"], url: "#", key: "shadows2025" },
  // 2026
  { year: 2026, title: "Quantum-Classical Co-design for Hybrid Inference", authors: "Various", tags: ["hybrid"], url: "#", key: "codesign2026" },
  { year: 2026, title: "QMC-Net: Data-Aware Quantum Representations for Remote Sensing Image Classification", authors: "Md Aminur Hossain, Ayush V. Patel, Biplab Banerjee", tags: ["hybrid"], url: "https://arxiv.org/abs/2604.11817", key: "qmcnet2026" },
];

// ---- Tag labels ----
const TAG_LABELS = {
  nlp: "NLP/LLM", vision: "Vision", gen: "Generative",
  theory: "Theory", hw: "Hardware", hybrid: "Hybrid Q-C",
  algo: "Algorithms", news: "News"
};

// ---- Search ----
const overlay   = document.getElementById('search-overlay');
const searchIn  = document.getElementById('search-input');
const searchRes = document.getElementById('search-results');
const navSearch = document.querySelector('.nav-search input');

function openSearch() {
  overlay?.classList.add('active');
  searchIn?.focus();
}
function closeSearch() {
  overlay?.classList.remove('active');
  if (searchIn) searchIn.value = '';
  if (searchRes) searchRes.innerHTML = '';
}

document.addEventListener('keydown', e => {
  if ((e.key === '/' || (e.ctrlKey && e.key === 'k')) && !e.target.matches('input,textarea')) {
    e.preventDefault(); openSearch();
  }
  if (e.key === 'Escape') closeSearch();
});

overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });

function renderResults(query) {
  if (!query || query.length < 2) { searchRes.innerHTML = ''; return; }
  const q = query.toLowerCase();
  const hits = PAPERS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.authors.toLowerCase().includes(q) ||
    p.year.toString().includes(q) ||
    p.tags.some(t => TAG_LABELS[t]?.toLowerCase().includes(q))
  ).slice(0, 8);

  if (!hits.length) {
    searchRes.innerHTML = '<div style="padding:1rem 1.2rem;color:var(--muted);font-size:.88rem;">No results found.</div>';
    return;
  }
  searchRes.innerHTML = hits.map(p => {
    const tagHtml = p.tags.map(t => `<span class="tag tag-${t}">${TAG_LABELS[t]}</span>`).join(' ');
    const href = p.page || p.url;
    return `<a class="search-result-item" href="${href}">
      <div class="search-result-title">${p.title}</div>
      <div class="search-result-meta">${p.year} · ${p.authors} &nbsp; ${tagHtml}</div>
    </a>`;
  }).join('');
}

searchIn?.addEventListener('input', e => renderResults(e.target.value));
navSearch?.addEventListener('focus', openSearch);
navSearch?.addEventListener('input', e => { openSearch(); if(searchIn) { searchIn.value = e.target.value; renderResults(e.target.value); } });

// ---- Tag filter (index page) ----
function initTagFilter() {
  const filterBtns = document.querySelectorAll('[data-filter]');
  const paperCards = document.querySelectorAll('[data-tags]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      paperCards.forEach(card => {
        const tags = card.dataset.tags.split(',');
        card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
      });
    });
  });
}

// ---- Smooth reveal ----
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('fade-up'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.card, .hw-card').forEach(el => io.observe(el));
}

// ---- Init ----
document.addEventListener('DOMContentLoaded', () => {
  initTagFilter();
  initReveal();
});
