// script.js

// Menu Toggle
document.getElementById('nav-toggle').addEventListener('click', function () {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Slider (if applicable)
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next').addEventListener('click', function () {
    changeSlide(1);
});

document.getElementById('prev').addEventListener('click', function () {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(function () {
    changeSlide(1);
}, 5000);

// Login Form
const loginForm = document.querySelector('form[action="dashboard.html"]');
if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        // Validar os campos
        if (!email || !password) {
            console.error('Por favor, preencha todos os campos.');
            return;
        }

        // Simular autenticação
        console.log('Login bem-sucedido');
        window.location.href = 'dashboard.html';
    });
}

// Register Form
const registerForm = document.querySelector('form[action="dashboard.html"]');
if (registerForm) {
    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = registerForm.querySelector('input[name="name"]').value;
        const email = registerForm.querySelector('input[name="email"]').value;
        const password = registerForm.querySelector('input[name="password"]').value;
        const confirmPassword = registerForm.querySelector('input[name="confirm-password"]').value;

        // Validar os campos
        if (!name || !email || !password || !confirmPassword) {
            console.error('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== confirmPassword) {
            console.error('As senhas não coincidem.');
            return;
        }

        // Simular cadastro
        console.log('Cadastro bem-sucedido');
        window.location.href = 'dashboard.html';
    });
}

// Schedule Form
const scheduleForm = document.querySelector('form[action="confirmation.html"]');
if (scheduleForm) {
    scheduleForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const service = scheduleForm.querySelector('select[name="service"]').value;
        const date = scheduleForm.querySelector('input[name="date"]').value;
        const time = scheduleForm.querySelector('input[name="time"]').value;

        // Validar os campos
        if (!service || !date || !time) {
            console.error('Por favor, preencha todos os campos.');
            return;
        }

        // Simular agendamento
        console.log('Agendamento bem-sucedido');
        window.location.href = 'confirmation.html';
    });
}
