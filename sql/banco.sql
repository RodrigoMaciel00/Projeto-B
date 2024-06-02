-- Cria o banco de dados
CREATE DATABASE VetAppointments;
USE VetAppointments;

--tabela de usuários
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20)
);

--  tabela de pets
CREATE TABLE Pets (
    pet_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pet_name VARCHAR(255) NOT NULL,
    animal_type VARCHAR(50) NOT NULL,
    breed VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- tabela de agendamentos
CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    pet_id INT,
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    appointment_reason VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (pet_id) REFERENCES Pets(pet_id)
);
