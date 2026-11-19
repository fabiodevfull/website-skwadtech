// Formulário de orçamento: espelha o que é digitado no "card de código" e envia para o
// Netlify Forms (form name="orcamento" no index.html). A Netlify guarda cada envio no
// painel Forms e avisa por e-mail. Sem JavaScript, o <form> envia sozinho e a Netlify
// mostra a página de confirmação dela.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form[name="orcamento"]');
  const inputs = {
    nome: document.getElementById('nome'),
    whatsapp: document.getElementById('whatsapp'),
    email: document.getElementById('email'),
    mensagem: document.getElementById('mensagem')
  };

  const codeContent = document.querySelector('.code-content');
  const btnEnviar = document.querySelector('.btn-enviar');
  const status = document.querySelector('.orcamento-status');

  // O texto digitado vira texto, nunca HTML (sem isso, "<img onerror=...>" rodaria na página)
  const escapar = (valor) => valor.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  // Atualiza o código exibido
  function updateCode() {
    const v = (campo) => escapar(inputs[campo].value || '');
    codeContent.innerHTML = `<span class="keyword">const</span> <span class="variable">Orcamento</span> = {<br>
  &nbsp;&nbsp;<span class="property">nome</span>: <span class="string">'${v('nome')}'</span>,<br>
  &nbsp;&nbsp;<span class="property">whatsapp</span>: <span class="string">'${v('whatsapp')}'</span>,<br>
  &nbsp;&nbsp;<span class="property">email</span>: <span class="string">'${v('email')}'</span>,<br>
  &nbsp;&nbsp;<span class="property">mensagem</span>: <span class="string">'${v('mensagem')}'</span><br>
}`;
  }

  Object.values(inputs).forEach(input => {
    input.addEventListener('input', updateCode);
  });

  function mostrarStatus(texto, tipo) {
    status.textContent = texto;
    status.className = `orcamento-status ${tipo}`;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const dados = {
      nome: inputs.nome.value.trim(),
      whatsapp: inputs.whatsapp.value.trim(),
      email: inputs.email.value.trim(),
      mensagem: inputs.mensagem.value.trim()
    };

    if (!dados.nome || !dados.whatsapp || !dados.email || !dados.mensagem) {
      mostrarStatus('Preencha todos os campos.', 'erro');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)) {
      mostrarStatus('Informe um e-mail válido.', 'erro');
      return;
    }
    if (dados.whatsapp.replace(/\D/g, '').length < 10) {
      mostrarStatus('Informe o WhatsApp com DDD.', 'erro');
      return;
    }

    btnEnviar.disabled = true;
    const textoOriginal = btnEnviar.textContent;
    btnEnviar.textContent = 'Enviando...';
    mostrarStatus('', '');

    try {
      // Formato que a Netlify espera: form-name + campos, como um <form> comum
      const resposta = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });
      if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`);

      form.reset();
      updateCode();
      btnEnviar.textContent = '✓ Enviado!';
      btnEnviar.style.background = '#27c93f';
      mostrarStatus('Recebemos seu pedido! Vamos responder em breve pelo WhatsApp ou e-mail.', 'ok');
      gsap.to(btnEnviar, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });

      setTimeout(() => {
        btnEnviar.textContent = textoOriginal;
        btnEnviar.style.background = '';
        btnEnviar.disabled = false;
      }, 3000);
    } catch (erro) {
      btnEnviar.textContent = textoOriginal;
      btnEnviar.disabled = false;
      mostrarStatus('Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp.', 'erro');
    }
  });

  // Animação de entrada dos cards com GSAP
  gsap.from('.code-card, .form-card', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.section-orcamento',
      start: 'top 80%'
    }
  });
});
