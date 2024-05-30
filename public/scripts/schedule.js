document.getElementById('schedule-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const petName = document.getElementById('pet-name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const student = document.getElementById('student').checked;
    const paymentMethod = document.getElementById('payment-method').value;

    fetch('http://localhost:3000/api/appointment/schedule', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            petName,
            service,
            date,
            time,
            student,
            paymentMethod
        })
    }).then(response => response.json())
      .then(data => {
          alert(data.message);
      }).catch(error => {
          console.error('Erro:', error);
      });
});
