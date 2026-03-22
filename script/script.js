// Seleciona o botão
const themeBtn = document.getElementById('theme-toggle');

// 1. Verificação imediata: Ao carregar a página, checa se o modo escuro estava ativo
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// 2. Lógica do Clique
themeBtn.addEventListener('click', () => {
    // Alterna a classe no body
    document.body.classList.toggle('dark-theme');
    
    // Verifica se a classe foi adicionada ou removida para salvar a preferência
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// 2. Validação do Formulário de Contato
// O script aguarda o carregamento do DOM para evitar erros de leitura
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const feedbackSucesso = document.getElementById('mensagem-sucesso');

    if (form) {
        form.addEventListener('submit', function(e) {
            // Impede o recarregamento da página (comportamento padrão do form) [cite: 57, 61]
            e.preventDefault();
            
            // Captura dos valores dos campos
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            // Regex para validação de formato de e-mail [cite: 60]
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // 1. Validação: Verifica se algum campo está vazio 
            if (nome === "" || email === "" || mensagem === "") {
                alert("Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Mensagem).");
                return; // Interrompe a execução
            }

            // 2. Validação: Verifica o formato do e-mail [cite: 60]
            if (!emailRegex.test(email)) {
                alert("Por favor, insira um endereço de e-mail válido.");
                return;
            }

            // 3. Sucesso: Simulação de envio e feedback visual [cite: 61, 62]
            // Exibe a mensagem de confirmação na tela
            if (feedbackSucesso) {
                feedbackSucesso.style.display = 'block';
                feedbackSucesso.innerHTML = `✅ Olá ${nome}, sua mensagem foi enviada com sucesso!`;
                
                // Limpa os campos do formulário após o envio 
                form.reset();

                // Esconde a mensagem de sucesso após 7 segundos
                setTimeout(() => {
                    feedbackSucesso.style.display = 'none';
                }, 7000);
            }
        });
    }
});