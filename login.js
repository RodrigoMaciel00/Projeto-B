document.addEventListener('DOMContentLoaded', function() {
    // Implementação do site de login

    // Recuperação de senha
    const forgotPasswordLink = document.getElementById('forgot-password');
    forgotPasswordLink.addEventListener('click', () => {
        const email = prompt('Digite seu e-mail para recuperação de senha:');
        if (email) {
            // Simulação de envio de e-mail de recuperação de senha
            alert(`Instruções de recuperação de senha foram enviadas para ${email}.`);
        }
    });

    // Mensagem de boas-vindas
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.textContent = 'Bem-vindo ao Portal de Login!';
});
