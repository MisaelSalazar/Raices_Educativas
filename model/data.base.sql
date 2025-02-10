-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS raices_educativas;

-- Usar la base de datos
USE raices_educativas;

-- Crear la tabla usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Identificador único
    nombre VARCHAR(100) NOT NULL,      -- Nombre del usuario
    cargo VARCHAR(100) NOT NULL,      -- Cargo del usuario
    contraseña VARCHAR(255) NOT NULL -- Contraseña encriptada
);
