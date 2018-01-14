//Mongoclient
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Connect returns the db as an object as opposed to v2.x.x of Mongodriver.
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5a5b1ee493135b3f301d3a17')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }), (err) => {
  //   console.log('Unable to fetch todos', err);
  // }

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todo count: ${count}`);
  }), (err) => {
    console.log('Unable to fetch todos', err);
  }

  const userEmiel = db.collection('Users').find({name: 'Emiel'});

  userEmiel.count().then((count) => {
    console.log(`Emiel found: ${count} times.`);
  }), (err) => {
    console.log('Unable to fetch users');
  }

  userEmiel.toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }), (err) => {
    console.log('Unable to users', err);
  }

  client.close();
});
