const express = require('express');
const app = express();
const cors = require('cors');

// settings
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get('/users', (req, res) => res.send('Users Rourtes'))
app.get('/notes', (req, res) => res.send('Notes Rourtes'))

module.exports = app;