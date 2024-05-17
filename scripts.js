document.addEventListener('DOMContentLoaded', () => {
    // Elementos DOM
    const calendar = document.getElementById('calendar');
    const selectedDateInput = document.getElementById('selected-date');
    const selectedTimeInput = document.getElementById('selected-time');

    // Função para obter o número de dias em um mês específico
    const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
    
    // Obter o mês e o ano atuais
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();
    
    // Obter o número de dias no mês atual
    const numberOfDays = daysInMonth(currentMonth, currentYear);

    // Função para selecionar um dia no calendário
    const selectDay = (day) => {
        // Remover a classe 'selected' do dia selecionado anteriormente, se houver
        const selectedDayElement = calendar.querySelector('.calendar-day.selected');
        if (selectedDayElement) {
            selectedDayElement.classList.remove('selected');
        }
        // Adicionar a classe 'selected' ao novo dia selecionado
        const newSelectedDayElement = [...calendar.children].find(el => el.textContent == day);
        newSelectedDayElement.classList.add('selected');
        // Atualizar o valor do input de data selecionada
        selectedDateInput.value = `${currentYear}-${String(currentMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        // Chamar a função para selecionar o horário
        selectTime();
    };

    // Função para selecionar o horário
    const selectTime = () => {
        // Opções de horário disponíveis
        const timeOptions = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
        // Elemento HTML para exibir as opções de horário
        const timeSelection = document.createElement('div');
        timeSelection.id = 'time-selection';
        timeSelection.innerHTML = '';
        
        // Iterar sobre as opções de horário e criar elementos para cada uma delas
        timeOptions.forEach(time => {
            const timeOption = document.createElement('div');
            timeOption.classList.add('time-option');
            timeOption.textContent = time;
            // Adicionar um evento de clique para selecionar o horário
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

        // Verificar se já existe uma seleção de horário e substituí-la ou inserir uma nova
        const existingTimeSelection = document.getElementById('time-selection');
        if (existingTimeSelection) {
            existingTimeSelection.replaceWith(timeSelection);
        } else {
            selectedDateInput.after(timeSelection);
        }
    };

    // Loop para criar os dias do calendário
    for (let i = 1; i <= numberOfDays; i++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = i;
        // Adicionar um evento de clique para selecionar o dia
        dayElement.addEventListener('click', () => selectDay(i));
        calendar.appendChild(dayElement);
    }
});
