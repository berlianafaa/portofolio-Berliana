// ─── FILTER BUTTONS ───
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// ─── SCROLL REVEAL ───
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => observer.observe(el));

// ─── HERO TYPING EFFECT ───
const roles = [
  "Pelajar",
  "SMK Negeri 2 Surabaya",
  "Jurusan",
  "Rekayasa Perangkat Lunak",
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleText = document.querySelector(".role-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    roleText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    roleText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typeSpeed = 500;
  }

  setTimeout(typeEffect, typeSpeed);
}

if (roleText) {
  typeEffect();
}

// ─── HERO CARD HOVER EFFECT ───
const heroCard = document.querySelector(".hero-card-main");
if (heroCard) {
  heroCard.addEventListener("mouseenter", () => {
    heroCard.style.transform = "translateY(-8px) rotateX(5deg)";
    heroCard.style.boxShadow = "0 32px 100px rgba(91, 79, 232, 0.2)";
  });

  heroCard.addEventListener("mouseleave", () => {
    heroCard.style.transform = "translateY(0) rotateX(0)";
    heroCard.style.boxShadow = "0 24px 80px rgba(0, 0, 0, 0.08)";
  });
}

// ─── CONTACT FORM SUBMIT ───
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = "✅ Pesan Terkirim!";
  btn.style.background = "#10B981";
  setTimeout(() => {
    btn.textContent = "Kirim Pesan ✉️";
    btn.style.background = "";
    e.target.reset();
  }, 3000);
}

// ─── NAVBAR SCROLL EFFECT ───
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.06)";
  } else {
    nav.style.boxShadow = "none";
  }
});
