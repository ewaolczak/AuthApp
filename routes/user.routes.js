const express = require('express');
const router = express.Router();

const isUserLogged = (req, res, next) => {
  if (!req.user) {
    res.redirect('/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isUserLogged, (req, res) => {
  res.render('logged');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', isUserLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isUserLogged, (req, res) => {
  res.render('profileSettings');
});

router.get('/logout', (req, res) => {
  res.render('logout');
});

module.exports = router;
