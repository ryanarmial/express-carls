module.exports = function ( req, res, next ) {
  if ( isNaN(parseInt(req.params.id)) ) {
    res.redirect('/')
  } else {
    next()
  }
}