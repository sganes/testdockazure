const { mongoClientConnect } = require('./mongodb_connect');

function getTodo() {
    return new Promise((resolve, reject) => {
        mongoClientConnect().then((db) => {
            db.collection('todos').find({}).toArray((err, todos) => {
                if (err)
                    reject({ status: 400, body: err });
                else if (todos.length === 0)
                    reject({ status: 404, body: 'Todos not found' });
                else
                    resolve({ status: 200, body: todos });
            });
        }).catch((err) => {
            reject({ status: 400, body: 'Mongo Network error'});
        });
    });
}

function postTodo(todo) {
    return new Promise((resolve, reject) => {
        mongoClientConnect().then((db) => {
            db.collection('todos').insertOne(todo, (err, result) => {
                if (err)
                    reject({ status: 400, body: err });
                resolve({ status: 200, body: 'Document Saved' });
            });
        }).catch((err) => {
            reject({ status: 400, body: 'Mongo Network error'});
        });
    });
}

module.exports = { getTodo, postTodo }