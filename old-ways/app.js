const express = require('express')
const bodyParser = require('body-parser')
const book = require('./routes/book')
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use( '/book', book )

app.set('view engine', 'ejs')

app.get('/', ( req, res ) => {
  res.render('index')
})
// app.get('/book/:id', ( req, res ) => {
//   let obj = {
//     param: req.params,
//     query: req.query
//   }
//   res.send( obj )
// })
app.post('/', ( req, res ) => {
  console.log(req.body)
  res.json( req.body )
})

app.get('/about', ( req, res ) => {
  res.send('ini halaman ganti')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))