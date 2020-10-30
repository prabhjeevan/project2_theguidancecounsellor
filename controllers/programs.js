

function index(req, res, next) {
         res.render('../views/programs/programs.ejs', {user: req.user, name: req.query.name});
 }

module.exports = {
    index,
};