module.exports = {
    //url: 'mongodb+srv://Vika:<vika1998>@myclusterdb-gf2kb.gcp.mongodb.net/test?retryWrites=true&w=majority'
    url: process.env.MONGO_URL || 'mongodb://localhost:27017/recipe-app'
}