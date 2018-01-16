// Mongoclient
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server')

  // Connect returns the db as an object as opposed to v2.x.x of Mongodriver.
  const db = client.db('TodoApp')

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Get a sandwich'
  // }).then((result) => {
  //   console.log(result)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'get a sandwich'}).then( (result) => {
  //   console.log(result)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // })

  // db.collection('Users').deleteMany({name: 'Emiel'}).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndDelete({name: 'Sofie'}).then((result) => {
    console.log(result)
  })

  client.close()
})
