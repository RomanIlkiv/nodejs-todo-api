const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        console.log('Todos');
        console.log(docs);
    }, (err) => {
        console.log('err', err);
    });

    db.collection('Todos').find({
        _id: new ObjectID('58ce55bcad8bf91003bf72b6')
    }).toArray().then((docs) => {
        console.log('Todos');
    console.log(docs);
    }, (err) => {
        console.log('err', err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log('Count: ' + count);
    });

    db.close();
});