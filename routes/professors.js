const express = require('express');
const router = express.Router();
const professorsCtrl = require('../controllers/professors');



/* GET users listing. */
router.get('/', professorsCtrl.index);
router.get('/new', isLoggedIn, professorsCtrl.newProf);
// router.get('/addtestprof', professorsCtrl.test);
router.get('/:id', isLoggedIn, professorsCtrl.removeProf)
router.post('/', isLoggedIn, professorsCtrl.create);


function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}

module.exports = router;
