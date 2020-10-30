const express = require('express');
const router = express.Router();
const schoolsCtrl = require('../controllers/schools');


/* GET users listing. */
router.get('/', schoolsCtrl.index);
router.get('/new', isLoggedIn, schoolsCtrl.newSchool);
router.get('/:id', schoolsCtrl.show);
// router.get('/addtestprof', professorsCtrl.test);
router.post('/', schoolsCtrl.create);
router.delete('/:id', isLoggedIn, schoolsCtrl.removeSchool)

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
