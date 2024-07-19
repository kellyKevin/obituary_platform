const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
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

app.get('/view_obituaries', (req, res) => {
    const query = 'SELECT * FROM obituaries';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('view_obituaries', { obituaries: results });
    });
});

app.get('/obituary/:slug', (req, res) => {
    const { slug } = req.params;
    const query = 'SELECT * FROM obituaries WHERE slug = ?';
    db.query(query, [slug], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.render('obituary', { obituary: results[0] });
        } else {
            res.status(404).send('Obituary not found');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
