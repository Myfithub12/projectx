const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// In-memory storage (replace with database in real application)
let users = [
    { username: 'user1', password: 'password1' }
];

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simulated authentication (replace with actual logic)
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Signup endpoint
app.post('/signup', (req, res) => {
    const { newUsername, newPassword } = req.body;

    // Simulated user creation (replace with actual logic)
    users.push({ username: newUsername, password: newPassword });
    res.json({ success: true, message: 'Signup successful' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
