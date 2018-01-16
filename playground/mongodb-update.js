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

  db.collection('Todos').findOneAndUpdate(
    {_id: new ObjectID('5a5e58eac48b4353f440eb0e')},
    {$set: {
      completed: true
    }},
    {
      returnOriginal: false
    }).then((result) => {
      console.log(result)
    })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a59294a219e92452c3df536')
  }, {
    $unset: {
      text: 'Wim'
    },
    $inc: {
      age: -5
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  client.close()
})
