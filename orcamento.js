// Sincronização do formulário com o código
document.addEventListener('DOMContentLoaded', () => {
  const inputs = {
    nome: document.getElementById('nome'),
    whatsapp: document.getElementById('whatsapp'),
    email: document.getElementById('email'),
    mensagem: document.getElementById('mensagem')
  };

  const codeContent = document.querySelector('.code-content');
  const btnEnviar = document.querySelector('.btn-enviar');

  // Função para atualizar o código exibido
  function updateCode() {
    const code = `<span class="keyword">const</span> <span class="variable">Orcamento</span> = {<br>
  &nbsp;&nbsp;<span class="property">nome</span>: <span class="string">'${inputs.nome.value || ''}'</span>,<br>
  &nbsp;&nbsp;<span class="property">whatsapp</span>: <span class="string">'${inputs.whatsapp.value || ''}'</span>,<br>
  &nbsp;&nbsp;<span class="property">email</span>: <span class="string">'${inputs.email.value || ''}'</span>,<br>
  &nbsp;&nbsp;<span class="property">mensagem</span>: <span class="string">'${inputs.mensagem.value || ''}'</span><br>
}`;
    
    codeContent.innerHTML = code;
  }

  // Adicionar listeners aos inputs
  Object.values(inputs).forEach(input => {
    input.addEventListener('input', updateCode);
  });

  // Função para enviar o formulário
  btnEnviar.addEventListener('click', () => {
    const dados = {
      nome: inputs.nome.value,
      whatsapp: inputs.whatsapp.value,
      email: inputs.email.value,
      mensagem: inputs.mensagem.value
    };

    // Validação simples
    if (!dados.nome || !dados.whatsapp || !dados.email || !dados.mensagem) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(dados.email)) {
      alert('Por favor, insira um email válido!');
      return;
    }

    // Animação de sucesso com GSAP
    gsap.to(btnEnviar, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        // Aqui você pode adicionar a lógica para enviar os dados
        console.log('Dados do orçamento:', dados);
        
        // Exemplo: enviar para WhatsApp
        const mensagemWhatsApp = `Olá! Gostaria de solicitar um orçamento.
        
Nome: ${dados.nome}
Email: ${dados.email}
Mensagem: ${dados.mensagem}`;
        
        const numeroWhatsApp = dados.whatsapp.replaceAll(/\D/g, '');
        const urlWhatsApp = `https://wa.me/55${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}`;
        
        // Abrir WhatsApp
        window.open(urlWhatsApp, '_blank');
        
        // Limpar formulário
        Object.values(inputs).forEach(input => input.value = '');
        updateCode();
        
        // Feedback visual
        const originalText = btnEnviar.textContent;
        btnEnviar.textContent = '✓ Enviado!';
        btnEnviar.style.background = '#27c93f';
        
        setTimeout(() => {
          btnEnviar.textContent = originalText;
          btnEnviar.style.background = '';
        }, 2000);
      }
    });
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