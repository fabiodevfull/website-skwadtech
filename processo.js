gsap.registerPlugin(ScrollTrigger);

// Definir estados iniciais ocultos
gsap.set('.step-num', { opacity: 0, scale: 0 });
gsap.set('.arrow-fill', { scaleX: 0 });
gsap.set('.arrow-head', { opacity: 0 });
gsap.set('.conn-top', { scaleY: 0 });
gsap.set('.conn-bot', { scaleY: 0 });
gsap.set('.lbl-top', { opacity: 0, y: -14 });
gsap.set('.lbl-bot', { opacity: 0, y: 14 });

// Título anima apenas uma vez
gsap.from('.processo-titulo', {
  opacity: 0,
  y: -20,
  duration: 0.55,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.section-processo',
    start: 'top 70%',
    once: true
  }
});

const processoTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 10,
  scrollTrigger: {
    trigger: '.section-processo',
    start: 'top 70%',
    once: true
  }
});

const stepNums  = document.querySelectorAll('.step-num');
const stepArrows = document.querySelectorAll('.step-arrow');

stepNums.forEach((num, i) => {
  const s = i + 1;

  // Número aparece
  processoTl.to(num, {
    opacity: 1,
    scale: 1,
    duration: 0.35,
    ease: 'back.out(1.7)'
  }, i === 0 ? 0 : '>-0.05');

  // Conector(es) crescem a partir do número
  const conns = document.querySelectorAll(`.conn-top[data-step="${s}"], .conn-bot[data-step="${s}"]`);
  if (conns.length) {
    processoTl.to(conns, { scaleY: 1, duration: 0.25, ease: 'power2.out' }, '<0.1');
  }

  // Label(s) deslizam para o lugar
  const topLbls = document.querySelectorAll(`.lbl-top[data-step="${s}"]`);
  const botLbls = document.querySelectorAll(`.lbl-bot[data-step="${s}"]`);

  if (topLbls.length) {
    processoTl.to(topLbls, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '<0.05');
  }
  if (botLbls.length) {
    processoTl.to(botLbls, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' }, '<0.05');
  }

  // Seta desenha após o número e label estarem visíveis
  if (stepArrows[i]) {
    processoTl
      .to(stepArrows[i].querySelector('.arrow-fill'), {
        scaleX: 1,
        duration: 0.38,
        ease: 'power2.out'
      }, '>0.06')
      .to(stepArrows[i].querySelector('.arrow-head'), {
        opacity: 1,
        duration: 0.12,
        ease: 'none'
      }, '>-0.08');
  }
});
