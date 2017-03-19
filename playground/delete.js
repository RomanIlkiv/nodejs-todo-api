const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // deleteMany
    /*db.collection('Todos').deleteMany({text: "wash up"}).then((result) => {
       console.log(result);
    });*/

    // deleteOne
    db.collection('Todos').deleteOne({text: "wash up"}).then((result) => {
        console.log(result);
    });

    // findOneAndDelte
    db.collection('Todos').findOneAndDelete({text: "wash up", completed: true}).then((result) => {
        console.log(result);
    });

    db.close();
});