module.exports = async function (context, req) {
    context.res = {
        status: 400,
        body: "Welcome Guest"
    }
}