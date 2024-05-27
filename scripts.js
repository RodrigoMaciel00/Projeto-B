document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Calendar and Time Selection
    const calendar = document.getElementById('calendar');
    const selectedDateInput = document.getElementById('selected-date');
    const selectedTimeInput = document.getElementById('selected-time');
    const scheduleForm = document.getElementById('schedule-form');
    const timeOptions = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    const numberOfDays = daysInMonth(currentMonth, currentYear);

    const selectDay = (day) => {
        const selectedDayElement = calendar.querySelector('.calendar-day.selected');
        if (selectedDayElement) {
            selectedDayElement.classList.remove('selected');
        }
        const newSelectedDayElement = [...calendar.children].find(el => el.textContent == day);
        newSelectedDayElement.classList.add('selected');
        selectedDateInput.value = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        selectTime();
    };

    const selectTime = () => {
        const timeSelection = document.createElement('div');
        timeSelection.id = 'time-selection';
        timeSelection.innerHTML = '';

        timeOptions.forEach(time => {
            const timeOption = document.createElement('div');
            timeOption.classList.add('time-option');
            timeOption.textContent = time;
            timeOption.addEventListener('click', () => {
                const selectedTimeOption = timeSelection.querySelector('.time-option.selected');
                if (selectedTimeOption) {
                    selectedTimeOption.classList.remove('selected');
                }
                timeOption.classList.add('selected');
                selectedTimeInput.value = time;
            });
            timeSelection.appendChild(timeOption);
        });

        const existingTimeSelection = document.getElementById('time-selection');
        if (existingTimeSelection) {
            existingTimeSelection.replaceWith(timeSelection);
        } else {
            selectedDateInput.after(timeSelection);
        }
    };

    for (let i = 1; i <= numberOfDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = i;
        dayElement.addEventListener('click', () => selectDay(i));
        calendar.appendChild(dayElement);
    }

    scheduleForm.addEventListener('submit', (event) => {
        if (!selectedDateInput.value || !selectedTimeInput.value) {
            event.preventDefault();
            alert('Por favor, selecione uma data e horário antes de agendar.');
        }
    });

    // Scroll Animations
    const scrollElements = document.querySelectorAll('.js-scroll');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        })
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Initial animation check
    handleScrollAnimation();
});
