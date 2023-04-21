const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sei.jaxa59q.mongodb.net/recipeDB?retryWrites=true&w=majority`

const PORT = process.env.PORT || 3000;

module.exports = { DATABASE_URL, PORT};