document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const petName = document.getElementById("pet_name").value;
        const animalType = document.getElementById("animal_type").value;
        const breed = document.getElementById("breed").value;
        const phone = document.getElementById("phone").value;

        const response = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password, petName, animalType, breed, phone })
        });

        if (response.ok) {
            window.location.href = `/greeting.html?name=${name}&pet=${petName}`;
        } else {
            alert("Registro falhou. Tente novamente.");
        }
    });
});
