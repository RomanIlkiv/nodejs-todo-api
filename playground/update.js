const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58ce55bcad8bf91003bf72b6')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    db.close();
});