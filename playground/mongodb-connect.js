//Mongoclient
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();
console.log (obj);

// const user = {name: 'andrew', age: 25};
// const {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //Connect returns the db as an object as opposed to v2.x.x of Mongodriver.
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do.',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Wim Vantomme',
  //   age: 35,
  //   locations: 'Rijkestraat 5 8570 Anzegem'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
