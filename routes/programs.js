const express = require('express');
const router = express.Router();
const programsCtrl = require('../controllers/programs');



/* GET users listing. */
router.get('/', programsCtrl.index);




module.exports = router;
