module.exports = async function (context, req) {
    const hostname = process.env.hostname || 'localhost'
    msg = `Hello, connection string is mongodb://${hostname}:27017/tododb`;
    context.res = {
        status: 400,
        body: msg
    }
}