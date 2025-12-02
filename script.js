// Esperar a que el HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
  /* -------- MENÚ RESPONSIVE -------- */
  const navToggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }

  /* -------- FORMULARIO CONTACTO -------- */
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMessage");

  if (form && msg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const terms = form.terms.checked;

      if (!name || !email) {
        msg.textContent = "Please complete required fields.";
        msg.style.color = "#ffb200";
        return;
      }

      if (!terms) {
        msg.textContent = "You must accept the terms.";
        msg.style.color = "#ffb200";
        return;
      }

      form.reset();
      msg.textContent = "Message sent!";
      msg.style.color = "#8bc34a";
    });
  }

  /* -------- CARRUSEL DE TESTIMONIOS -------- */
  const testimonials = [
    {
      text: "Con Juntos+ mi papá ya no se siente solo y eso nos da tranquilidad.",
      name: "Laura S.",
      role: "Daughter and CareLink user",
      initials: "LS",
    },
    {
      text: "Mi abuela espera cada semana las actividades, ahora se siente parte de algo.",
      name: "Carlos M.",
      role: "Grandson and Juntos+ user",
      initials: "CM",
    },
    {
      text: "Antes se sentía aislado, ahora tiene amigos con quienes conversar todos los días.",
      name: "Ana R.",
      role: "Daughter and Juntos+ user",
      initials: "AR",
    },
  ];

  let currentTestimonial = 0;

  const textEl = document.getElementById("testimonialText");
  const nameEl = document.getElementById("testimonialName");
  const roleEl = document.getElementById("testimonialRole");
  const initialsEl = document.getElementById("testimonialInitials");
  const nextBtn = document.getElementById("testimonialNextBtn");
  const dotsContainer = document.getElementById("testimonialDots");

  function renderTestimonial(index) {
    const t = testimonials[index];
    if (!t || !textEl || !nameEl || !roleEl || !initialsEl) return;

    textEl.textContent = t.text;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    initialsEl.textContent = t.initials;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll(".dot");
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      renderTestimonial(currentTestimonial);
    });
  }

  if (dotsContainer) {
    dotsContainer.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-index")) || 0;
        currentTestimonial = idx;
        renderTestimonial(currentTestimonial);
      });
    });
  }

  // Render inicial
  renderTestimonial(currentTestimonial);
});
