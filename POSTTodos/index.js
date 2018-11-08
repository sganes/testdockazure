const Dao = require('../db/DAO')

module.exports =  async function (context, req) {
    const responseObject = await Dao.postTodo(req.body).then((result) => { return ({ status: 200, body: result }) })
        .catch((err) => {
                return ({ status: err.status, body: err.body })
        });
    context.res = {
        status: responseObject.status,
        body: responseObject.body
    };
}
