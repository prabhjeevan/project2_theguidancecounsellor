const School = require('../models/school');


function index(req, res, next) {
        School.find({}, function (err, school) { 
             console.log(school)
             res.render('../views/schools/schools.ejs', {school, user: req.user, name: req.query.name});
     })
}

function newSchool(req, res, next) {
    res.render('schools/new', {user: req.user, name: req.query.name});
  }

  function create(req, res) {
    const school = new School(req.body);
    school.save(function(err) {
      if (err) return res.render('schools/new');
      console.log(school);
      res.redirect('/schools');
    });
  }


function show(req, res, next) {
    School.findById(req.params.id, function(err, school) {
          res.render('schools/reviews', {school, user: req.user, name: req.query.name});
        });
      }

function removeSchool(req,res,next){
    School.findByIdAndRemove(req.params.id, function (err, school) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            res.redirect('/schools');
        } 
            });
      }



module.exports = {
    index,
    newSchool,
    create,
    removeSchool,
    show
  };