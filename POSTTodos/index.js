const Dao = require('../db/DAO')
/*
module.exports =  async function (context, req) {
    const responseObject = await Dao.postTodo(req.body).then((result) => { return ({ status: 200, body: result }) })
        .catch((err) => {
                return ({ status: err.status, body: err.body })
        });
    context.res = {
        status: responseObject.status,
        body: responseObject.body
    };
}*/

module.exports = function (context, req) {
    Dao.postTodo(req.body).then((result) => {
        context.res = {
            status: result.status,
            body: result.body
        }
        context.done();
    }).catch((err) => {
        context.res = {
            status: err.status,
            body: err.body
        }
        context.done();
    });
}