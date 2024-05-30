document.addEventListener("DOMContentLoaded", () => {
    const scheduleForm = document.getElementById("scheduleForm");
    scheduleForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const additionalInfo = document.getElementById("additional_info").value;
        const emergencyContact = document.getElementById("emergency_contact").value;
        const paymentMethod = document.getElementById("payment_method").value;
        const petName = document.getElementById("pet_name").value;

        const response = await fetch("/schedule", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ service, date, time, additionalInfo, emergencyContact, paymentMethod, petName })
        });

        if (response.ok) {
            window.location.href = `/confirmation.html?date=${date}&time=${time}&pet=${petName}&payment=${paymentMethod}`;
        } else {
            alert("Agendamento falhou. Tente novamente.");
        }
    });
});
