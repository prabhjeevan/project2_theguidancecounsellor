const express = require('express');
const router = express.Router();
const homepageCtrl = require('../controllers/homepage');
const passport = require('passport');

/* GET users listing. */
router.get('/', homepageCtrl.index);
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect : '/',
      failureRedirect : '/'
    }
  ));

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

module.exports = router;
