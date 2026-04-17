(() => {
  const canvas  = document.getElementById('darkCanvas');
  const ctx     = canvas.getContext('2d');
  const wrapper = document.querySelector('.dark-wrapper');

  function resizeCanvas() {
    canvas.width  = wrapper.offsetWidth;
    canvas.height = wrapper.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const colors = [
    'rgba(219, 194, 244, 0.7)',
    'rgba(148, 92, 201, 0.7)',
    'rgba(124, 103, 207, 0.7)',
    'rgba(87, 128, 217, 0.7)',
    'rgba(107, 140, 213, 0.7)'
  ];

  class Particle {
    constructor() {
      this.reset();
      this.y     = Math.random() * canvas.height;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    reset() {
      this.x    = Math.random() * canvas.width;
      this.y    = Math.random() * canvas.height;
      this.size = Math.random() * 2.5 + 1.5;
      this.vx   = Math.random() * 0.4 - 0.2;
      this.vy   = Math.random() * 0.4 - 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width)  this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw() {
      ctx.fillStyle   = this.color;
      ctx.shadowBlur  = 12;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  const particles = Array.from({ length: 70 }, () => new Particle());

  function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        const dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
        if (dist < 140) {
          ctx.strokeStyle = `rgba(124, 103, 207, ${(1 - dist / 140) * 0.3})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    connectParticles();
    requestAnimationFrame(animate);
  }

  animate();
})();
