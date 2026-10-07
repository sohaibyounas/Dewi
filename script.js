/**
 * Dewi - Digital Agency & Creative Studio
 * Powered by Framer Motion (Motion for Vanilla JS)
 */

document.addEventListener("DOMContentLoaded", () => {
  initMotionAnimations();
  initMobileNav();
  initNavbarScroll();
  initScrollSpy();
  initScrollToTop();
  initTestimonialCarousel();
  initNewsletterForm();
});

// ==========================================================================
// 1. FRAMER MOTION ANIMATIONS
// ==========================================================================
function initMotionAnimations() {
  if (typeof Motion === "undefined") {
    console.warn("Motion library not loaded, falling back to standard styles.");
    // Fallback: start counters immediately if Motion is unavailable
    runCountersDirectly();
    return;
  }

  const { animate, inView, scroll, stagger } = Motion;

  // 1.1 Top Scroll Progress Bar
  const progressBar = document.getElementById("scrollProgress");
  if (progressBar && scroll) {
    scroll((progress) => {
      progressBar.style.transform = `scaleX(${progress})`;
    });
  }

  // 1.2 Hero Entrance Animations
  animate(".hero-badge", { opacity: [0, 1], y: [25, 0] }, { duration: 0.6, easing: [0.16, 1, 0.3, 1] });
  animate(".hero-title", { opacity: [0, 1], y: [35, 0] }, { duration: 0.8, delay: 0.15, easing: [0.16, 1, 0.3, 1] });
  animate(".hero-description", { opacity: [0, 1], y: [25, 0] }, { duration: 0.8, delay: 0.3, easing: [0.16, 1, 0.3, 1] });
  animate(".hero-buttons", { opacity: [0, 1], y: [20, 0], scale: [0.95, 1] }, { duration: 0.7, delay: 0.45, easing: [0.16, 1, 0.3, 1] });

  // 1.3 Section Headers InView Animation
  document.querySelectorAll(".section-header").forEach((header) => {
    inView(header, ({ target }) => {
      animate(target, { opacity: [0, 1], y: [30, 0] }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] });
    }, { amount: 0.2 });
  });

  // 1.4 About Section
  const aboutLeft = document.querySelector(".about-content-left");
  const aboutRight = document.querySelector(".about-content-right");
  if (aboutLeft) {
    inView(aboutLeft, ({ target }) => {
      animate(target, { opacity: [0, 1], x: [-35, 0] }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] });
    }, { amount: 0.15 });
  }
  if (aboutRight) {
    inView(aboutRight, ({ target }) => {
      animate(target, { opacity: [0, 1], x: [35, 0] }, { duration: 0.8, easing: [0.22, 1, 0.36, 1] });
    }, { amount: 0.15 });
  }

  // 1.5 Stats Cards & Animated Counters InView
  let countersAnimated = false;
  const statGrid = document.querySelector(".stat-grid");
  if (statGrid) {
    inView(statGrid, ({ target }) => {
      const cards = target.querySelectorAll(".stat-card");
      animate(cards, { opacity: [0, 1], y: [35, 0], scale: [0.94, 1] }, {
        delay: stagger(0.12),
        duration: 0.6,
        easing: [0.22, 1, 0.36, 1]
      });

      if (!countersAnimated) {
        countersAnimated = true;
        animateCounter("counter1", 0, 232, 1400);
        animateCounter("counter2", 0, 521, 1600);
        animateCounter("counter3", 0, 1463, 1800);
        animateCounter("counter4", 0, 15, 1200);
      }
    }, { amount: 0.25 });
  }

  // 1.6 Featured Services
  const servicesRow = document.querySelector("#service .row");
  if (servicesRow) {
    inView(servicesRow, ({ target }) => {
      const cards = target.querySelectorAll(".service-card-wrapper");
      animate(cards, { opacity: [0, 1], y: [45, 0] }, {
        delay: stagger(0.15),
        duration: 0.75,
        easing: [0.22, 1, 0.36, 1]
      });
    }, { amount: 0.15 });
  }

  // 1.7 Client Logos
  const clientsContainer = document.querySelector(".clients-flex");
  if (clientsContainer) {
    inView(clientsContainer, ({ target }) => {
      const logos = target.querySelectorAll(".client-logo-item");
      animate(logos, { opacity: [0, 1], scale: [0.8, 1] }, {
        delay: stagger(0.08),
        duration: 0.5,
        easing: [0.34, 1.56, 0.64, 1]
      });
    }, { amount: 0.2 });
  }

  // 1.8 Feature Grid & Detail
  const featureCards = document.querySelector(".feature-cards-grid");
  if (featureCards) {
    inView(featureCards, ({ target }) => {
      const items = target.querySelectorAll(".feature-pill-card");
      animate(items, { opacity: [0, 1], y: [25, 0] }, {
        delay: stagger(0.1),
        duration: 0.6,
        easing: [0.22, 1, 0.36, 1]
      });
    }, { amount: 0.2 });
  }

  const featureDetail = document.querySelector(".feature-detail-row");
  if (featureDetail) {
    inView(featureDetail, ({ target }) => {
      animate(target, { opacity: [0, 1], y: [35, 0] }, { duration: 0.75, easing: [0.22, 1, 0.36, 1] });
    }, { amount: 0.2 });
  }

  // 1.9 Check Services (6 Cards Grid)
  const servicesGridBox = document.querySelector(".services-grid-box");
  if (servicesGridBox) {
    inView(servicesGridBox, ({ target }) => {
      const items = target.querySelectorAll(".service-item-card");
      animate(items, { opacity: [0, 1], y: [35, 0] }, {
        delay: stagger(0.1),
        duration: 0.65,
        easing: [0.22, 1, 0.36, 1]
      });
    }, { amount: 0.15 });
  }

  // 1.10 Portfolio Items InView
  const portfolioTabContent = document.getElementById("pills-tabContent");
  if (portfolioTabContent) {
    inView(portfolioTabContent, ({ target }) => {
      const activePane = target.querySelector(".tab-pane.active");
      if (activePane) {
        const items = activePane.querySelectorAll(".portfolio-item");
        animate(items, { opacity: [0, 1], scale: [0.92, 1], y: [30, 0] }, {
          delay: stagger(0.06),
          duration: 0.55,
          easing: [0.22, 1, 0.36, 1]
        });
      }
    }, { amount: 0.1 });
  }

  // Tab switch listener with Framer Motion spring fade
  document.querySelectorAll('#pills-tab button').forEach((btn) => {
    btn.addEventListener('shown.bs.tab', (e) => {
      const targetSelector = e.target.getAttribute('data-bs-target');
      const targetPane = document.querySelector(targetSelector);
      if (targetPane) {
        const items = targetPane.querySelectorAll('.portfolio-item');
        animate(items, { opacity: [0, 1], scale: [0.92, 1], y: [25, 0] }, {
          delay: stagger(0.05),
          duration: 0.45,
          easing: [0.22, 1, 0.36, 1]
        });
      }
    });
  });

  // 1.11 Team Members
  const teamGrid = document.querySelector(".team-grid");
  if (teamGrid) {
    inView(teamGrid, ({ target }) => {
      const members = target.querySelectorAll(".team-card-wrapper");
      animate(members, { opacity: [0, 1], y: [45, 0] }, {
        delay: stagger(0.15),
        duration: 0.75,
        easing: [0.22, 1, 0.36, 1]
      });
    }, { amount: 0.15 });
  }

  // 1.12 Contact Section
  const contactLayout = document.querySelector(".contact-layout");
  if (contactLayout) {
    inView(contactLayout, ({ target }) => {
      const infoWrap = target.querySelector(".contact-info-wrap");
      const formCard = target.querySelector(".contact-form-card");
      if (infoWrap) {
        animate(infoWrap, { opacity: [0, 1], x: [-30, 0] }, { duration: 0.7, easing: [0.22, 1, 0.36, 1] });
      }
      if (formCard) {
        animate(formCard, { opacity: [0, 1], x: [30, 0] }, { duration: 0.7, delay: 0.1, easing: [0.22, 1, 0.36, 1] });
      }
    }, { amount: 0.15 });
  }

  // 1.13 Footer Columns & Social Links
  const footerGrid = document.querySelector(".footer-grid");
  if (footerGrid) {
    inView(footerGrid, ({ target }) => {
      const cols = target.children;
      animate(cols, { opacity: [0, 1], y: [25, 0] }, {
        delay: stagger(0.1),
        duration: 0.6,
        easing: [0.22, 1, 0.36, 1]
      });

      const socialIcons = target.querySelectorAll(".footer-social-btn");
      if (socialIcons.length > 0) {
        animate(socialIcons, { opacity: [0, 1], scale: [0, 1] }, {
          delay: stagger(0.08, { start: 0.25 }),
          duration: 0.45,
          easing: [0.34, 1.56, 0.64, 1]
        });
      }
    }, { amount: 0.15 });
  }

  // Footer Social Icon Hover Micro-Interactions
  document.querySelectorAll(".footer-social-btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      animate(btn, { scale: 1.14, rotate: 6 }, { duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
      animate(btn, { scale: 1, rotate: 0 }, { duration: 0.2 });
    });
  });

  // Footer Link Hover Micro-Interactions
  document.querySelectorAll(".footer-links-list a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      animate(link, { x: 5 }, { duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      animate(link, { x: 0 }, { duration: 0.2 });
    });
  });

  // 1.14 Micro-Interactions on buttons
  document.querySelectorAll(".btn-primary-glow, .btn-header-cta, .btn-form-submit, #newsletterBtn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      animate(btn, { scale: 1.04 }, { duration: 0.2, easing: [0.34, 1.56, 0.64, 1] });
    });
    btn.addEventListener("mouseleave", () => {
      animate(btn, { scale: 1 }, { duration: 0.2, easing: [0.16, 1, 0.3, 1] });
    });
    btn.addEventListener("mousedown", () => {
      animate(btn, { scale: 0.96 }, { duration: 0.1 });
    });
    btn.addEventListener("mouseup", () => {
      animate(btn, { scale: 1.04 }, { duration: 0.15 });
    });
  });
}

// ==========================================================================
// 2. COUNTER ANIMATION WITH SMOOTH EASING
// ==========================================================================
function animateCounter(id, start, end, duration) {
  const el = document.getElementById(id);
  if (!el) return;

  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic calculation
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOutCubic);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = end;
    }
  }

  requestAnimationFrame(update);
}

function runCountersDirectly() {
  animateCounter("counter1", 0, 232, 1500);
  animateCounter("counter2", 0, 521, 1500);
  animateCounter("counter3", 0, 1463, 1800);
  animateCounter("counter4", 0, 15, 1200);
}

// ==========================================================================
// 3. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileNav() {
  const toggleBtn = document.getElementById("toggle-icon");
  const drawer = document.getElementById("smnav");
  const closeBtn = document.getElementById("mobileDrawerClose");
  const backdrop = document.getElementById("navBackdrop");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-nav-sublink");

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";

    // Framer Motion staggered link entrance
    if (typeof Motion !== "undefined" && Motion.animate) {
      const links = drawer.querySelectorAll(".mobile-nav-list > li");
      Motion.animate(links, { opacity: [0, 1], x: [-15, 0] }, {
        delay: Motion.stagger(0.04),
        duration: 0.35,
        easing: [0.16, 1, 0.3, 1]
      });
    }
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeDrawer);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeDrawer);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Don't close if it's a dropdown toggle trigger
      if (!link.hasAttribute("data-bs-toggle")) {
        closeDrawer();
      }
    });
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
      closeDrawer();
    }
  });
}

// Global hook for inline onclick if referenced
window.headernav = function() {
  const drawer = document.getElementById("smnav");
  const backdrop = document.getElementById("navBackdrop");
  if (drawer && drawer.classList.contains("active")) {
    drawer.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.style.overflow = "";
  } else if (drawer) {
    drawer.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

// ==========================================================================
// 4. NAVBAR SCROLL EFFECT
// ==========================================================================
function initNavbarScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ==========================================================================
// 5. SCROLL SPY (ACTIVE NAV INDICATOR)
// ==========================================================================
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const desktopLinks = document.querySelectorAll("#main-header .nav a");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  function onScroll() {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    if (!currentId && window.scrollY < 200) {
      currentId = "hero";
    }

    desktopLinks.forEach((link) => {
      const parent = link.closest("li");
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
        if (parent) parent.classList.add("active");
      } else {
        link.classList.remove("active");
        if (parent) parent.classList.remove("active");
      }
    });

    mobileLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// ==========================================================================
// 6. SCROLL TO TOP BUTTON
// ==========================================================================
function initScrollToTop() {
  const scrollBtn = document.getElementById("scrollBtn");
  if (!scrollBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      if (scrollBtn.style.display !== "flex") {
        scrollBtn.style.display = "flex";
        if (typeof Motion !== "undefined" && Motion.animate) {
          Motion.animate(scrollBtn, { opacity: [0, 1], scale: [0.7, 1] }, { duration: 0.3 });
        }
      }
    } else {
      if (scrollBtn.style.display === "flex") {
        if (typeof Motion !== "undefined" && Motion.animate) {
          Motion.animate(scrollBtn, { opacity: [1, 0], scale: [1, 0.7] }, { duration: 0.25 })
            .finished.then(() => {
              scrollBtn.style.display = "none";
            });
        } else {
          scrollBtn.style.display = "none";
        }
      }
    }
  }, { passive: true });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================================
// 7. TESTIMONIAL CAROUSEL
// ==========================================================================
function initTestimonialCarousel() {
  const carouselEl = document.getElementById("carouselExampleIndicators");
  if (!carouselEl || typeof bootstrap === "undefined") return;

  new bootstrap.Carousel(carouselEl, {
    interval: 5000,
    ride: "carousel",
    pause: "hover"
  });

  // Framer Motion smooth slide content reveal on change
  carouselEl.addEventListener("slid.bs.carousel", (e) => {
    const activeSlide = e.relatedTarget;
    if (!activeSlide || typeof Motion === "undefined" || !Motion.animate) return;

    const avatar = activeSlide.querySelector(".testimonial-avatar");
    const name = activeSlide.querySelector(".testimonial-name");
    const role = activeSlide.querySelector(".testimonial-role");
    const rating = activeSlide.querySelector(".testimonial-rating");
    const quote = activeSlide.querySelector(".testimonial-quote");

    if (avatar) Motion.animate(avatar, { opacity: [0, 1], scale: [0.85, 1] }, { duration: 0.5, easing: [0.34, 1.56, 0.64, 1] });
    if (name) Motion.animate(name, { opacity: [0, 1], y: [12, 0] }, { duration: 0.45, delay: 0.06 });
    if (role) Motion.animate(role, { opacity: [0, 1], y: [8, 0] }, { duration: 0.4, delay: 0.1 });
    if (rating) Motion.animate(rating, { opacity: [0, 1], scale: [0.75, 1] }, { duration: 0.45, delay: 0.14 });
    if (quote) Motion.animate(quote, { opacity: [0, 1], y: [16, 0] }, { duration: 0.5, delay: 0.18 });
  });
}

// ==========================================================================
// 8. NEWSLETTER SUBSCRIPTION FORM & TOAST
// ==========================================================================
function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const toast = document.getElementById("newsletterToast");
  const btn = document.getElementById("newsletterBtn");

  if (!form || !emailInput || !toast) return;

  let toastTimer = null;

  function showToastMessage(isSuccess, message) {
    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    if (isSuccess) {
      toast.classList.remove("error");
      toast.innerHTML = `<i class="bi bi-check-circle-fill me-1"></i> ${message || "Thank you for subscribing!"}`;
    } else {
      toast.classList.add("error");
      toast.innerHTML = `<i class="bi bi-exclamation-circle-fill me-1"></i> ${message || "Please enter a valid email address."}`;
    }

    toast.style.display = "flex";

    if (typeof Motion !== "undefined" && Motion.animate) {
      Motion.animate(toast, {
        opacity: [0, 1],
        y: [-12, 0],
        scale: [0.94, 1]
      }, {
        duration: 0.45,
        easing: [0.34, 1.56, 0.64, 1]
      });
    }

    toastTimer = setTimeout(() => {
      if (typeof Motion !== "undefined" && Motion.animate) {
        Motion.animate(toast, {
          opacity: [1, 0],
          y: [0, -10],
          scale: [1, 0.94]
        }, { duration: 0.35 }).finished.then(() => {
          toast.style.display = "none";
        });
      } else {
        toast.style.display = "none";
      }
    }, 4500);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      if (typeof Motion !== "undefined" && Motion.animate) {
        Motion.animate(emailInput, { x: [-8, 8, -6, 6, -3, 3, 0] }, { duration: 0.35 });
      }
      showToastMessage(false, "Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (btn && typeof Motion !== "undefined" && Motion.animate) {
      Motion.animate(btn, { scale: [1, 0.92, 1.06, 1] }, { duration: 0.35 });
    }

    showToastMessage(true, "Thank you for subscribing!");
    emailInput.value = "";
  });
}

// ==========================================================================
// 8. CONTACT FORM VALIDATION & FEEDBACK
// ==========================================================================
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const subjectError = document.getElementById("subjectError");
  const messageError = document.getElementById("messageError");
  const fmessage = document.getElementById("fmessage");

  nameError.textContent = "";
  emailError.textContent = "";
  subjectError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (name.length < 3) {
    nameError.textContent = "Please enter your full name (at least 3 characters).";
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please provide a valid email address.";
    isValid = false;
  }

  if (subject.length < 4) {
    subjectError.textContent = "Subject must be at least 4 characters.";
    isValid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Message must be at least 10 characters long.";
    isValid = false;
  }

  if (!isValid) return false;

  // Show Success Toast with Framer Motion bounce
  fmessage.style.display = "block";
  if (typeof Motion !== "undefined" && Motion.animate) {
    Motion.animate(fmessage, { opacity: [0, 1], y: [-15, 0], scale: [0.95, 1] }, {
      duration: 0.4,
      easing: [0.34, 1.56, 0.64, 1]
    });
  }

  document.getElementById("myform").reset();

  setTimeout(() => {
    if (typeof Motion !== "undefined" && Motion.animate) {
      Motion.animate(fmessage, { opacity: [1, 0], y: [0, -10] }, { duration: 0.3 })
        .finished.then(() => { fmessage.style.display = "none"; });
    } else {
      fmessage.style.display = "none";
    }
  }, 4000);

  return false;
}

window.validateForm = validateForm;
