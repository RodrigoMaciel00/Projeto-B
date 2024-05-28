document.addEventListener('DOMContentLoaded', function() {
    // Implementação do site de agendamento

    const calendar = document.getElementById('calendar');
    const form = document.querySelector('form');
    const availabilityMessage = document.getElementById('availability-message');
    const welcomeMessage = document.getElementById('welcome-message');

    welcomeMessage.textContent = 'Bem-vindo ao sistema de agendamento da UNIESP!';

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Simulação de verificação de disponibilidade
        const isAvailable = checkAvailability();

        if (isAvailable) {
            form.submit();
        } else {
            availabilityMessage.textContent = 'Horário indisponível. Por favor, escolha outro horário.';
        }
    });

    function checkAvailability() {
        // Simular a lógica de verificação de disponibilidade
        // Aqui você pode implementar a lógica real de verificação
        return Math.random() > 0.5; // Exemplo de lógica aleatória
    }
});
