// Navegação Suave (Smooth Scroll)
document.addEventListener('DOMContentLoaded', () => {
  // ── Hamburger menu toggle ──
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isActive);
    });

    // Fecha ao clicar em um link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha ao clicar fora da navbar
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Selecionar todos os links âncora
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');

      // Se o link for só "#", não fazer nada
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // getBoundingClientRect garante posição correta mesmo dentro de wrappers posicionados (ex: dark-wrapper)
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

        // Scroll suave com GSAP (mais controle)
        gsap.to(globalThis, {
          duration: 1.8,
          scrollTo: {
            y: targetPosition,
            autoKill: true
          },
          ease: "power3.inOut"
        });

        // Opcional: Adicionar classe ativa ao link clicado
        anchorLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Highlight do menu ao fazer scroll (opcional)
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200; // Offset para ativar antes

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remover active de todos
        anchorLinks.forEach(link => link.classList.remove('active'));

        // Adicionar active ao link correspondente
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });
});
