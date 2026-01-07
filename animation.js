// Configuração do Canvas
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
const heroSection = document.querySelector('.hero-section');

// Ajustar o tamanho do canvas para a hero-section
function resizeCanvas() {
  canvas.width = heroSection.offsetWidth;
  canvas.height = heroSection.offsetHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Configurações
const config = {
  particleCount: 85,
  connectionDistance: 150,
  mouseRadius: 150,
  mouseForce: 0.05
};

// Mouse position
const mouse = {
  x: null,
  y: null,
  radius: config.mouseRadius
};

// Cores baseadas no background
const colors = [
  'rgba(219, 194, 244, 0.8)', // --cor-p1
  'rgba(148, 92, 201, 0.8)',  // --cor-p2
  'rgba(124, 103, 207, 0.8)', // --cor-p3
  'rgba(87, 128, 217, 0.8)',  // --cor-c8
  'rgba(107, 140, 213, 0.8)'  // --cor-c7
];

// Classe Partícula
class Particle {
  constructor() {
    this.reset();
    this.y = Math.random() * canvas.height;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 3 + 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 30) + 1;
    this.vx = Math.random() * 0.5 - 0.25;
    this.vy = Math.random() * 0.5 - 0.25;
  }

  update() {
    // Movimento base suave
    this.baseX += this.vx;
    this.baseY += this.vy;

    // Bounce nas bordas
    if (this.baseX < 0 || this.baseX > canvas.width) this.vx *= -1;
    if (this.baseY < 0 || this.baseY > canvas.height) this.vy *= -1;

    // Helper para retornar suavemente à posição base
    const returnToBase = () => {
      if (this.x !== this.baseX) this.x -= (this.x - this.baseX) / 10;
      if (this.y !== this.baseY) this.y -= (this.y - this.baseY) / 10;
    };

    // Se não há mouse, retorna à base e sai cedo
    if (mouse.x == null || mouse.y == null) {
      returnToBase();
      this.x = this.x || this.baseX;
      this.y = this.y || this.baseY;
      return;
    }

    // Interação com o mouse
        const dx = mouse.x - this.baseX;
        const dy = mouse.y - this.baseY;
        const distance = Math.hypot(dx, dy);
    
        if (distance >= mouse.radius) {
          returnToBase();
          this.x = this.x || this.baseX;
          this.y = this.y || this.baseY;
          return;
        }

    const forceDirectionX = distance === 0 ? 0 : dx / distance;
    const forceDirectionY = distance === 0 ? 0 : dy / distance;
    const maxDistance = mouse.radius;
    const force = (maxDistance - distance) / maxDistance;

    // Repelir partículas
    const directionX = forceDirectionX * force * this.density * config.mouseForce;
    const directionY = forceDirectionY * force * this.density * config.mouseForce;
    this.x -= directionX;
    this.y -= directionY;

    this.x = this.x || this.baseX;
    this.y = this.y || this.baseY;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    // Glow effect
    ctx.shadowBlur = 15;
    ctx.shadowColor = this.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

// Criar partículas
const particles = [];
for (let i = 0; i < config.particleCount; i++) {
  particles.push(new Particle());
}

// Conectar partículas
function connectParticles() {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a + 1; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = Math.hypot(dx, dy);

      if (distance < config.connectionDistance) {
        const opacity = 1 - (distance / config.connectionDistance);
        ctx.strokeStyle = `rgba(124, 103, 207, ${opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particles[a].x, particles[a].y);
        ctx.lineTo(particles[b].x, particles[b].y);
        ctx.stroke();
      }
    }
  }
}

// Animar
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Atualizar e desenhar partículas
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  // Conectar partículas
  connectParticles();

  requestAnimationFrame(animate);
}

// Event listeners para o mouse
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
});

canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
});

// Animação de entrada com GSAP
gsap.from(particles, {
  duration: 2,
  size: 0,
  stagger: 0.02,
  ease: "power2.out",
  onComplete: () => {
    animate();
  }
});

// Iniciar animação
animate();