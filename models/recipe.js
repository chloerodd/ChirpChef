const {mongoose} = require("../db/connection");


const RecipeSchema = new mongoose.Schema ({
    name: String,
    ingredients: String,
    intructions: String
})

const Recipe = mongoose.model("Recipe", RecipeSchema)