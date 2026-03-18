// 1. Alternar Tema (Claro/Escuro)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Comentário: Salva a preferência ou apenas troca a classe visual
});

// 2. Validação do Formulário de Contato
// Só executa se estiver na página de contato
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;
        
        // Validação simples de e-mail com Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "" || mensagem === "") {
            alert("Erro: Preencha todos os campos obrigatórios.");
        } else if (!emailRegex.test(email)) {
            alert("Erro: Insira um e-mail válido.");
        } else {
            // Simulação de envio
            alert(`Sucesso! Mensagem de ${nome} enviada.`);
            form.reset();
        }
    });
}