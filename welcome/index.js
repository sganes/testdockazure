module.exports = async function (context, req) {
    const host = process.env.host || 'localhost';
    context.res = {
        status: 400,
        body: `Welcome. Mongo host is ${host}`
    }
}