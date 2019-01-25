let express = require('express')
let router  = express.Router()
let Book = require('./model')

// Get all
router.get('/', (request, response)=> {
  Book
    .find().exec()
    .then((books)=> {
      response.json(books)
    })
})

// Get by ID
router.get('/:id')

// Create
router.post('/', (request, response)=> {

  let book = new Book({
    title: request.body.title,
    author: request.body.author,
    pageCount: request.body.pageCount,
    isHardcover: request.body.isHardcover
  })

  book
    .save()
    .then((savedBook)=> {
      response.json(savedBook)
    })
})

// Update
router.put('/')

router.delete('/author/:author', (request, response)=> {
  let author = request.params.author
  Book
    .deleteMany({author})
    .then(()=> {
      response.json({deleted: true})
    })
})

// Destroy
router.delete('/:id', (request, response)=> {
  let id = request.params.id
  Book
    .findByIdAndDelete(id)
    .then(()=> {
      response.json({deleted: true})
    })
})

module.exports = router