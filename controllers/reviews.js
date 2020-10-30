const School = require('../models/school');


function create(req, res, next) {
    School.findById(req.params.id, function(err, school) {
      school.reviews.push(req.body);
      school.save(function(err) {
        res.redirect(`/schools/${school._id}`);
      });
    });
  }

    async function removeReview(req, res, next) {
        let  schools = await School.find({'reviews._id': req.params.id});
        console.log(schools)
        schools[0].reviews.id(req.params.id).remove();
        schools[0].save(function(err){
            res.redirect(`/schools/${schools[0]._id}`);
        });
    };

module.exports = {
    create,
    removeReview
  };