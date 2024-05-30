document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const petName = document.getElementById('pet-name').value;
        const animalType = document.getElementById('animal-type').value;
        const breed = document.getElementById('breed').value;
        const phone = document.getElementById('phone').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem');
            return;
        }

        // Save user data (this can be replaced with an API call to save to a database)
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('petName', petName);
        localStorage.setItem('animalType', animalType);

        // Redirect to welcome page
        window.location.href = 'welcome.html';
    });
});
