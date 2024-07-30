const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const csvWriter = createCsvWriter({
    path: 'data.csv',
    header: [
        { id: 'number', title: 'NUMBER' },
        { id: 'hit', title: 'HIT' }
    ],
    append: true
});

app.post('/submit', (req, res) => {
    const number = req.body.numberInput;
    const hit = req.body.hit ? 'Yes' : 'No';

    const record = [
        {
            number: number,
            hit: hit
        }
    ];

    csvWriter.writeRecords(record)
        .then(() => {
            console.log('The CSV file was updated successfully.');
            res.send('Form submitted and CSV updated successfully.');
        })
        .catch((error) => {
            console.error('Error writing to CSV file', error);
            res.status(500).send('Error writing to CSV file');
        });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
