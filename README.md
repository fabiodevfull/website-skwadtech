<div align="center">

# 🚀 SkwadTech - Landing Page

### Soluções em Desenvolvimento de Software

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)

**[Demo ao Vivo](#) • [Reportar Bug](#) • [Solicitar Feature](#)**

---

</div>

## 📋 Sobre o Projeto

Landing page moderna e interativa desenvolvida para **SkwadTech**, empresa de desenvolvimento de software e soluções tecnológicas. O projeto apresenta animações fluidas, design responsivo e uma experiência de usuário excepcional.

### ✨ Destaques

- 🎨 **Design Moderno** - Interface limpa com gradientes e glassmorphism
- 🌊 **Animações Interativas** - Partículas que reagem ao movimento do mouse
- 📱 **100% Responsivo** - Adaptável a todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e animações suaves
- 🎯 **Navegação Intuitiva** - Scroll suave entre seções
- 💬 **Integração WhatsApp** - Formulário de contato direto

---

## 🎥 Preview

### Hero Section com Animação de Partículas
- Fundo animado com 80 partículas interativas
- Conexões dinâmicas entre partículas próximas
- Efeito de repulsão ao movimento do mouse
- Gradiente roxo/azul imersivo

### Section Soluções & Stacks
- Layout em duas colunas com divisória vertical
- Grid responsivo de tecnologias
- Cards com hover effects
- Syntax highlighting temático

### Section Orçamento
- Card de código com atualização em tempo real
- Formulário glassmorphism
- Validação de campos
- Integração com WhatsApp

---

## 🛠️ Tecnologias

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com Flexbox/Grid
- **JavaScript (ES6+)** - Interatividade e lógica

### Bibliotecas & Frameworks
- **[GSAP 3.12.2](https://greensock.com/)** - Animações de alta performance
  - ScrollTrigger - Animações ao scroll
  - ScrollToPlugin - Navegação suave
- **Google Fonts** - Roboto & Poppins

### Técnicas de Design
- **Glassmorphism** - Efeito de vidro fosco
- **Gradientes Complexos** - Transições de cor suaves
- **Canvas API** - Animações de partículas
- **CSS Variables** - Tema customizável

---

## 📁 Estrutura do Projeto

```
skwadtech-landing/
├── index.html              # Página principal
├── assets/
│   └── img/
│       ├── logo.svg        # Logo da empresa
│       └── [icons]/        # Ícones de tecnologias
├── css/
│   ├── styles.css          # Import principal
│   ├── global.css          # Reset e variáveis
│   ├── header.css          # Navegação
│   ├── main.css            # Hero section
│   ├── section.css         # Soluções & Stacks
│   └── orcamento.css       # Formulário
└── js/
    ├── animation.js        # Partículas interativas
    ├── navigation.js       # Scroll suave
    └── orcamento.js        # Formulário e validação
```

---

## 🚀 Como Usar

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/seu-usuario/skwadtech-landing.git
cd skwadtech-landing
```

### 2️⃣ Estrutura de Pastas
Organize seus arquivos conforme a estrutura acima.

### 3️⃣ Adicione as Imagens
Coloque os ícones das tecnologias em `/assets/img/`

### 4️⃣ Abra no Navegador
```bash
# Com Live Server (VSCode)
# Ou simplesmente abra index.html
open index.html
```

### 5️⃣ Personalize
Edite as variáveis CSS em `global.css`:
```css
:root {
  --cor-p4: #23458f;  /* Cor primária */
  --cor-p3: #7c67cf;  /* Cor secundária */
  /* ... */
}
```

---

## ⚙️ Funcionalidades Detalhadas

### 🎨 Hero Section com Partículas

**Características:**
- 80 partículas animadas com movimento autônomo
- Conexões dinâmicas (até 150px de distância)
- Interação mouse: partículas se afastam dentro de 150px
- Cores baseadas na paleta do projeto
- Efeito glow em cada partícula

**Personalização:**
```javascript
// Em animation.js
const config = {
  particleCount: 80,           // Quantidade
  connectionDistance: 150,     // Distância de conexão
  mouseRadius: 150,            // Raio de interação
  mouseForce: 0.05            // Força de repulsão
};
```

### 📊 Section Soluções & Stacks

**Layout:**
- Barra vertical decorativa antes dos títulos
- Linha divisória central gradiente
- Marcadores quadrados customizados
- Grid 3 colunas para ícones de tecnologias
- Hover effects com elevação

**Tecnologias Exibidas:**
- Frontend: HTML5, CSS3, JavaScript, React, Next.js, Tailwind
- Backend: C#, C++, TypeScript, Java, Node.js
- Database: PostgreSQL, MySQL, Oracle, MongoDB

### 💼 Section Orçamento

**Card de Código:**
- Estilo VSCode/Terminal Mac
- Bolinhas coloridas (red, yellow, green)
- Syntax highlighting em tempo real
- Atualização conforme digitação no formulário

**Formulário:**
- 4 campos: Nome, WhatsApp, Email, Mensagem
- Validação completa (campos vazios + formato email)
- Integração direta com WhatsApp
- Feedback visual (botão verde "✓ Enviado!")
- Glassmorphism effect

### 🧭 Navegação Intuitiva

**Features:**
- Scroll suave com GSAP (1.2s)
- Compensação automática do header
- Highlight do link da seção visível
- Transições animadas
- Âncoras funcionais

---

## 🎨 Paleta de Cores

```css
/* Cores Primárias */
--cor-p1: #dbc2f4  /* Rosa claro */
--cor-p2: #945cc9  /* Roxo médio */
--cor-p3: #7c67cf  /* Roxo azulado */
--cor-p4: #23458f  /* Azul escuro */

/* Cores Secundárias */
--cor-c1: #ffffff  /* Branco */
--cor-c6: #889fcf  /* Azul claro */
--cor-c9: #3d68c8  /* Azul médio */

/* Gradientes */
Background Hero: linear-gradient(135deg, #0a0a0a 0%, #1a0f2e 50%, #0f1a2e 100%)
Background Orçamento: linear-gradient(135deg, #1a0f2e 0%, #23458f 50%, #1a0f2e 100%)
```

---

## 📱 Responsividade

### Breakpoints
```css
/* Desktop */
@media (min-width: 1024px) { ... }

/* Tablet */
@media (max-width: 1024px) {
  .orcamento-container { flex-direction: column; }
  .section-primeira { padding: 4rem 2rem; }
}

/* Mobile */
@media (max-width: 768px) {
  .navbar { padding: 1rem 2rem; }
  .stacks-container { grid-template-columns: repeat(2, 1fr); }
}
```

---

## 🔧 Configuração Avançada

### Alterar Animação de Partículas

**Atrair ao invés de Repelir:**
```javascript
// animation.js, linha 88-89
// De:
this.x -= directionX;
this.y -= directionY;

// Para:
this.x += directionX;
this.y += directionY;
```

### Integrar com Backend

**Substituir WhatsApp por API:**
```javascript
// orcamento.js
btnEnviar.addEventListener('click', async () => {
  const response = await fetch('/api/orcamento', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });
  
  if (response.ok) {
    alert('Orçamento enviado com sucesso!');
  }
});
```

### Adicionar Google Analytics

```html
<!-- No <head> do index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Partículas não aparecem
```javascript
// Verifique se o canvas existe
console.log(document.getElementById('particleCanvas'));

// Certifique-se que animation.js carrega após o DOM
// Coloque <script> antes de </body>
```

### Scroll não é suave
```css
/* Adicione no global.css */
html {
  scroll-behavior: smooth;
}
```

### Ícones não carregam
```html
<!-- Verifique os caminhos -->
<img src="/assets/img/HTML5.svg" alt="HTML">
<!-- Ou use caminhos relativos -->
<img src="./assets/img/HTML5.svg" alt="HTML">
```

---

## 📈 Performance

### Otimizações Implementadas
- ✅ Canvas com `requestAnimationFrame`
- ✅ CSS com `will-change` para animações
- ✅ Debounce em scroll listeners
- ✅ Lazy loading de imagens
- ✅ Minificação de CSS/JS (produção)

### Métricas Esperadas
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Lighthouse Score:** 90+

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature incrível'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### Padrões de Commit
```
feat: Nova funcionalidade
fix: Correção de bug
docs: Documentação
style: Formatação
refactor: Refatoração
test: Testes
chore: Manutenção
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**SkwadTech Team**

- Website: [skwadtech.com](#)
- GitHub: [@skwadtech](#)
- LinkedIn: [SkwadTech](#)

---

## 📞 Contato

Tem alguma dúvida ou sugestão? Entre em contato!

- 📧 Email: contato@skwadtech.com
- 💬 WhatsApp: +55 (11) 99999-9999
- 🌐 Website: www.skwadtech.com

---

## 🌟 Agradecimentos

- [GSAP](https://greensock.com/) - Pela incrível biblioteca de animações
- [Google Fonts](https://fonts.google.com/) - Pelas fontes
- [Shields.io](https://shields.io/) - Pelos badges
- Comunidade Open Source 💚

---

<div align="center">

### 💜 Feito com amor pela SkwadTech

**Se este projeto te ajudou, considere dar uma ⭐**

[⬆ Voltar ao topo](#-skwadtech---landing-page)

</div>
