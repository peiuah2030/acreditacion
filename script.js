document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = document.querySelectorAll("main section[id]");
  const animatedItems = document.querySelectorAll(
    ".kpi-card, .content-card, .table-card, .criteria-card, .alt-card, .evidence-card, .timeline-item"
  );

  // 1) Navegación suave
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // 2) Resaltar sección activa en el menú
  const setActiveLink = () => {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  };

  // 3) Animación de entrada sutil
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  animatedItems.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });

  // Ejecutar al cargar y al hacer scroll
  setActiveLink();
  window.addEventListener("scroll", setActiveLink);
});
