const { Book } = require('../models')


module.exports = {

  show: ( req, res ) => {
    Book.findAll({
      attributes: ['title'],
      where: {
        pages: 250
      }
    })
      .then( books => {
        res
          .status(200)
          .json({
            msg: 'Data has been save',
            data: books
          })
      })
      .catch( err => {
        res
          .status(500)
          .json( err  )
      })
  },

  save: ( req, res ) => {

    let objBook = {

      title: req.body.title,
      pages: req.body.pages,

    }
    Book.create(objBook)
      .then( result => {
        res
          .status(200)
          .json({
            msg: 'Data has been save',
            data: result
          })
      })
      .catch( err => {
        res
          .status(500)
          .json( err  )
      })
  },

  update: ( req, res ) => {

    let id = req.params.id

    // ini bikin object untuk static method
    // let objBook = {

    //   title: req.body.title,
    //   pages: req.body.pages,

    // }
    Book.findById(id)
      .then( book => {
        book.title = req.body.title
        book.pages = req.body.pages

        console.log(book);

        book.save()
          .then( result => {
            res
              .status(200)
              .json({
                msg: 'Data has been save',
                data: result
              })
          })
          .catch( err => {
            res
              .status(500)
              .json( err  )
          })
      })
      .catch( err => {
        res
          .status(500)
          .json( err  )
      })
    //sekarang yang instance method

    // ini yang static method
    // Book.update( objBook , {
    //   where: {
    //     id: id
    //   }
    // })
    //   .then( result => {
    //     res
    //       .status(200)
    //       .json({
    //         msg: 'Data has been save',
    //         data: result
    //       })
    //   })
    //   .catch( err => {
    //     res
    //       .status(500)
    //       .json( err  )
    //   })

  }

}