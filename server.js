const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'obituary_platform'
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
});

// Route for displaying the obituary form
app.get('/obituary_form.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'obituary_form.html'));
});

// Route for handling form submission
app.post('/submit_obituary', (req, res) => {
  const { name, date_of_birth, date_of_death, content, author } = req.body;
  const slug = name.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now();

  const sql = 'INSERT INTO obituaries (name, date_of_birth, date_of_death, content, author, submission_date, slug) VALUES (?, ?, ?, ?, ?, NOW(), ?)';
  const values = [name, date_of_birth, date_of_death, content, author, slug];

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    res.redirect('/view_obituaries');
  });
});

// Route for displaying obituaries
app.get('/view_obituaries', (req, res) => {
  db.query('SELECT * FROM obituaries', (err, results) => {
    if (err) throw err;
    res.render('view_obituaries', { obituaries: results });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
