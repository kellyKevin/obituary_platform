const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const slugify = require('slugify');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Momanyi4148',
    database: 'obituary_platform'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/submit_obituary', (req, res) => {
    const { name, date_of_birth, date_of_death, content, author } = req.body;
    const slug = slugify(name + '-' + Date.now(), { lower: true });

    const query = 'INSERT INTO obituaries (name, date_of_birth, date_of_death, content, author, slug) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, date_of_birth, date_of_death, content, author, slug], (err, result) => {
        if (err) throw err;
        res.send('Obituary submitted successfully!');
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
