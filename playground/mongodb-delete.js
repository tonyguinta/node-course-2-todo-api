// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });
  
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // })

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // })


  // Challenges
  //
  // deleteMany Challenge
  // db.collection('Users').deleteMany({name: 'Tony'}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // findOneAndDelete Challenge
  db.collection('Users')
    .findOneAndDelete({_id: new ObjectID('5bf6022bb97b143998319a81')})
    .then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  }, (err) => {
    console.log(err);
  })

  // client.close();
});
