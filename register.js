document.addEventListener('DOMContentLoaded', function() {
    // Implementação do site de cadastro

    const form = document.querySelector('form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const email = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        if (password.value !== confirmPassword.value) {
            errorMessage.textContent = 'As senhas não coincidem.';
            event.preventDefault();
        } else if (!validateEmail(email.value)) {
            errorMessage.textContent = 'E-mail inválido.';
            event.preventDefault();
        } else {
            errorMessage.textContent = '';
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
