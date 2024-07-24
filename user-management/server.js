const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; 

app.use(bodyParser.json());

let users = [];


app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/register', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
