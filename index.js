let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express()
let bookRouter = require('./books/controller')

mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let errorMiddleware = function(error, request, response, next) {
  response.status(500).json({error: true})
}

app.use(errorMiddleware)
app.use('/books', bookRouter)

app.listen(9000, ()=> {
  console.log("Connected")
})