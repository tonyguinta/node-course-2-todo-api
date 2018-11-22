// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos')
  //   .findOneAndUpdate(
  //     {_id: new ObjectID('5bf610fbd4fba527eee6eb1e')}, 
  //     {$set: {completed: true}},
  //     {returnOriginal: false}
  //   )
  //   .then((result) => {
  //     console.log(result);
  // }, (err) => {
  //   console.log(err);
  // })

  db.collection('Users')
    .findOneAndUpdate(
      {_id: new ObjectID('5bf6039c58c27623dcb8c848')}, 
      {$set: {name: 'Jame'}, $inc: {age: 1}}, 
      {returnOriginal: false}
    ).then((result) => {
      console.log(result);
    });

  // client.close();
});
