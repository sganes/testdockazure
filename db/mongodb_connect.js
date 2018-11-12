const MongoClient = require('mongodb').MongoClient;

function mongoClientConnect(){
    return new Promise((resolve,reject) => {
        MongoClient.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err, client) => {
              if(err)
                  reject(err)
              else 
                  resolve(client.db('ToDoDataBase'));
        });
    })
}

module.exports = {mongoClientConnect}

