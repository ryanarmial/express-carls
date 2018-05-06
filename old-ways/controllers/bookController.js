let ryan = 'ryan'
module.exports = {
  
  show: ( req, res ) => {
    res.send(ryan)
  },
  detail: ( req, res ) => {
    let obj = {
          param: req.params,
          query: req.query
        }
    let a = parseInt(req.params.id)
    console.log('ini pake number', typeof Number(req.params.id));
    console.log('ini pake parseint', a);
    console.log('tipenya', typeof a);
    
    res.send( obj )
  }

}