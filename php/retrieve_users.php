<?php
// Database connection details
$dsn = 'mysql:host=localhost;dbname=your_database;charset=utf8mb4';
$db_user = 'your_username';
$db_password = 'your_password';

// Attempt to connect to the database
try {
    $pdo = new PDO($dsn, $db_user, $db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Query to retrieve users
    $stmt = $pdo->query('SELECT id, username, email FROM users');

    // Fetch all users as an associative array
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

} catch (PDOException $e) {
    echo 'Error: ' . $e->getMessage();
}

// Close the database connection
$pdo = null;
?>
