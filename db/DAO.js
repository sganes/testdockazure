const { mongoose } = require('./mongoose_connect');
const { Todo } = require('./todoModel');

function getTodo() {
    return new Promise((resolve, reject) => {
        Todo.find({}, function (err, toDos) {
            if(err)
               return err;
            else if (toDos.length === 0)
                reject({ code: 404, body: 'Todos not found' });
            else
                resolve(toDos);
        });
    });
};

function postTodo(toDo) {
    return new Promise((resolve, reject) => {
        Todo.create(toDo, function (err, toDo) {
            if (err)
                reject(err);
            else
                resolve(toDo);
        });
    });
}

module.exports = {getTodo, postTodo}