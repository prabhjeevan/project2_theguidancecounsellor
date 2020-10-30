

function index(req, res, next) {
    res.render('guidance/homepage', {user: req.user, name: req.query.name});
  }



module.exports = {
    index
  };