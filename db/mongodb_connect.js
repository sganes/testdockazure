const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://mongo:27017'

function mongoClientConnect(){
    return new Promise((resolve,reject) => {
        MongoClient.connect(uri, { useNewUrlParser: true }, (err, client) => {
              if(err)
                  reject(err)
              else 
                  resolve(client.db('ToDoDataBase'));
        });
    })
}

module.exports = {mongoClientConnect}

