const express = require('express')
const bodyParser = require('body-parser')
const {ObjectID} = require('mongodb')
const {mongoose} = require('./db/mongoose')

const {Todo} = require('./models/todo')
const {User} = require('./models/user')

const app = express()

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  })

  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }).catch((err) => {
    res.status(400).send(err)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).end()
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).end()
    }
    res.status(200).send({todo})
  }).catch((e) => {
    res.status(404).end()
  })
})

app.listen(3000, () => {
  console.log('Started on port 3000')
})

module.exports = {
  app
}
