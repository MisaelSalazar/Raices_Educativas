<?php
require 'conect.db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contraseña = password_hash($_POST['contraseña'], PASSWORD_BCRYPT); // Encriptamos la contraseña

    try {
        $stmt = $pdo->prepare("INSERT INTO usuarios (nombre, correo, contraseña) VALUES (?, ?, ?)");
        $stmt->execute([$nombre, $correo, $contraseña]);
        echo json_encode(['message' => 'Usuario creado con éxito']);
    } catch (PDOException $e) {
        echo json_encode(['error' => $e->getMessage()]);
    }
}
