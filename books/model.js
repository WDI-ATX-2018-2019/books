let mongoose = require('mongoose')

let BookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: "Anonymous"
  },
  pageCount: Number,
  isHardcover: Boolean
})

let BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel