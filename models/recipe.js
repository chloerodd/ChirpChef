const mongoose = require ("mongoose")


const RecipeSchema = new mongoose.Schema ({
    name: String,
    ingredients: String,
    instructions: String,
    image: String
})

const Recipe = mongoose.model("Recipe", RecipeSchema, "recipes")

module.exports = {Recipe}