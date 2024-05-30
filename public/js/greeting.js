document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    const petName = localStorage.getItem('petName');

    if (userName && petName) {
        document.getElementById('user-name').textContent = userName;
        document.getElementById('pet-name').textContent = petName;
    } else {
        // Redirect to register if there's no user data
        window.location.href = 'register.html';
    }

    document.getElementById('back-to-home').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
