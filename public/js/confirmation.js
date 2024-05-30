document.addEventListener('DOMContentLoaded', function() {
    const appointmentDate = localStorage.getItem('appointmentDate');
    const appointmentTime = localStorage.getItem('appointmentTime');
    const appointmentReason = localStorage.getItem('appointmentReason');

    document.getElementById('appointment-date').textContent = appointmentDate;
    document.getElementById('appointment-time').textContent = appointmentTime;
    document.getElementById('appointment-reason').textContent = appointmentReason;
});
