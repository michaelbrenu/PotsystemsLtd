import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener("DOMContentLoaded", () => {
  // Hero Section
  const heroContainer = document.querySelector(".hero-inner, .page-hero");
  if (heroContainer) {
    const heroEls = heroContainer.querySelectorAll("h1, p, .hero-btns, .hero-eyebrow, .breadcrumb");
    if (heroEls.length > 0) {
        animate(heroEls, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, delay: stagger(0.15), easing: "ease-out" });
    }
  }

  // Section Headers
  document.querySelectorAll(".section-title").forEach(title => {
    inView(title, () => {
      animate(title, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, easing: "ease-out" });
    });
  });

  document.querySelectorAll(".section-sub").forEach(sub => {
    inView(sub, () => {
      animate(sub, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6, easing: "ease-out", delay: 0.2 });
    });
  });

  document.querySelectorAll(".tag").forEach(tag => {
    inView(tag, () => {
      animate(tag, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.5 });
    });
  });

  // Cards
  document.querySelectorAll(".grid-3, .grid-2").forEach(grid => {
    const cards = grid.querySelectorAll(".card, .panel-responsive");
    if (cards.length > 0) {
      inView(grid, () => {
        animate(cards, { opacity: [0, 1], y: [40, 0] }, { duration: 0.6, delay: stagger(0.15) });
      });
    }
  });

  // Image Blocks
  document.querySelectorAll(".img-block").forEach(block => {
    inView(block, () => {
      animate(block, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.8, easing: "ease-out" });
    });
  });

  // Stats
  const statsGrid = document.querySelector(".stats-grid");
  if (statsGrid) {
    // Immediate children of stats-grid
    const statItems = Array.from(statsGrid.children);
    if(statItems.length > 0) {
        inView(statsGrid, () => {
        animate(statItems, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 0.6, delay: stagger(0.1) });
        });
    }
  }

  // Process Steps
  document.querySelectorAll(".section").forEach(section => {
    const steps = section.querySelectorAll(".process-step");
    if (steps.length > 0) {
      inView(section, () => {
        animate(steps, { opacity: [0, 1], x: [-30, 0] }, { duration: 0.5, delay: stagger(0.1) });
      });
    }
  });

  // Adinkra Grid
  const adinkraGrid = document.querySelector(".adinkra-grid");
  if (adinkraGrid) {
    const items = Array.from(adinkraGrid.children);
    if (items.length > 0) {
        inView(adinkraGrid, () => {
        animate(items, { opacity: [0, 1], y: [30, 0] }, { duration: 0.6, delay: stagger(0.15) });
        });
    }
  }

  // Feature Items
  document.querySelectorAll(".feature-list").forEach(list => {
    const items = list.querySelectorAll(".feature-item");
    if (items.length > 0) {
      inView(list, () => {
        animate(items, { opacity: [0, 1], x: [-20, 0] }, { duration: 0.5, delay: stagger(0.1) });
      });
    }
  });
});
