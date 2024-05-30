document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulating login process
        if (email === 'test@example.com' && password === 'password') {
            window.location.href = 'dashboard.html';
        } else {
            alert('Email ou senha inválidos');
        }
    });
});
