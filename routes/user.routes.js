const express = require('express');
const router = express.Router;

app.get('/logged', (req, res) => {
  res.render('logged');
});

app.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
