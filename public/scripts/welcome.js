document.addEventListener('DOMContentLoaded', function() {
    const userName = localStorage.getItem('name');
    const petName = localStorage.getItem('petName');
    const animalType = localStorage.getItem('animalType');

    document.getElementById('user-name').textContent = userName;
    document.getElementById('pet-name').textContent = petName;
    document.getElementById('animal-type').textContent = animalType;
});
