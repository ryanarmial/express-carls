module.exports = function ( req, res, next ) {
  if (req.params.id < 100) {
    next()
  } else {
    res.send('berenti disini')
  }
}