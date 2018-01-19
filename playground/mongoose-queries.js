const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

const id = '5a5e6cf77a5ed54f8896b931'

if (!ObjectID.isValid(id)) {
  console.log('ID not valid')
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos)
// })

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo)
// })

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo by id:', todo)
// }).catch((e) => console.log(e))

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((err) => console.log(err))
