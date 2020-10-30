const professor = require('../models/professor');
const Professor = require('../models/professor');



function index(req, res, next) {
        Professor.find({}, function (err, professor) { 
             console.log(professor)
             res.render('../views/professors/professors.ejs', {professor, user: req.user, name: req.query.name});
     })
}

function newProf(req, res) {
    res.render('professors/new', {user: req.user, name: req.query.name});
  }

  function create(req, res) {
    const professor = new Professor(req.body);
    professor.save(function(err) {
      // one way to handle errors
      if (err) return res.render('professors/new');
      console.log(professor);
      // for now, redirect right back to new.ejs
      res.redirect('/professors');
    });
  }

  function removeProf(req,res){
    Professor.findByIdAndDelete(req.params.id, function (err, professor) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            res.redirect('/professors');
        } 
            });
      }



module.exports = {
    index,
    newProf,
    create,
    removeProf

  };