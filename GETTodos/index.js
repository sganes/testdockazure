const Dao = require('../db/DAO')

module.exports =  async function (context, req) {
    const responseObject = await Dao.getTodo().then((result) => {
         console.log(result)
         context.log(result)
         return ({ status: 200, body: result }) 
        })
        .catch((err) => {
            if (err.code === 404)
                return ({ status: 404, body: err.body })
            else
                return ({ status: err.status, body: err.body })
        });
    context.res = {
        status: responseObject.status,
        body: responseObject.body
    };
}
