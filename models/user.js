const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator')

//Schema
const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

// userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema, "users");

module.exports = { User };