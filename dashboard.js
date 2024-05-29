document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('showing');
    });

    // Simulação de dados do usuário
    const userName = 'John Doe';
    const userEmail = 'johndoe@example.com';
    const nextAppointment = {
        date: '30/05/2024',
        time: '15:00',
        service: 'Consulta de Rotina'
    };
    const lastAppointmentDate = '20/04/2024';

    // Preenchendo os dados no dashboard
    document.getElementById('user-name').textContent = userName;
    document.getElementById('profile-name').textContent = userName;
    document.getElementById('profile-email').textContent = userEmail;
    document.getElementById('next-appointment-date').textContent = nextAppointment.date;
    document.getElementById('next-appointment-time').textContent = nextAppointment.time;
    document.getElementById('next-appointment-service').textContent = nextAppointment.service;
    document.getElementById('last-appointment-date').textContent = lastAppointmentDate;
});
