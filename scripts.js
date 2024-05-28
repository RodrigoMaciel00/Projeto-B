// scripts.js

// Função para exibir mensagem de boas-vindas no login
document.addEventListener("DOMContentLoaded", function() {
    const loginContainer = document.querySelector('.login-container');
    if (loginContainer) {
        const welcomeMessage = document.createElement('p');
        welcomeMessage.textContent = "Bem-vindo de volta! Por favor, faça login para continuar.";
        loginContainer.insertBefore(welcomeMessage, loginContainer.querySelector('form'));
    }

    const registerContainer = document.querySelector('.register-container');
    if (registerContainer) {
        const welcomeMessage = document.createElement('p');
        welcomeMessage.textContent = "Bem-vindo! Cadastre-se para acessar todos os nossos serviços.";
        registerContainer.insertBefore(welcomeMessage, registerContainer.querySelector('form'));
    }

    const scheduleContainer = document.querySelector('.schedule-container');
    if (scheduleContainer) {
        const motivationalPhrase = document.createElement('p');
        motivationalPhrase.textContent = "Cuidar dos nossos pets é um ato de amor.";
        scheduleContainer.insertBefore(motivationalPhrase, scheduleContainer.querySelector('form'));
    }
});

// Função para validar campos de senha no registro
function validatePassword() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity("As senhas não coincidem.");
    } else {
        confirmPassword.setCustomValidity("");
    }
}

document.getElementById("password").onchange = validatePassword;
document.getElementById("confirm-password").onkeyup = validatePassword;
