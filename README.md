# ChirpChef by Chloe Rodriguez
A Twitter styled recipe blog!
This app is created so that users can post recipe and recieve feedback and likes!

### Technologies used: 
* Javascript
* CSS
* Express
* nodeJS
* MongoDB
* EJS
* HTML5
* Nodemon
* Mongoose
*Recipe API

### Live Link:
https://chirpchef.onrender.com/recipes

### Wireframes
Index page:
![alt text](https://imgur.com/gallery/KbBik60)
Show page:
![alt text](https://imgur.com/gallery/QCeG9KD)

## User Stories:
### MVP
* As a user, I will be able to post my own recipes.
* As a user, I will be able to explore other users recipes/post.
* As a user, I will be able to edit my post.
* As a user, I will be able to delete my post.
* As a user, I will be able to like a post.

### Stretch Goals
* As a user, I will be able to comment on a post.
* As a user, I will be able to login to my account.

### Code Snippet
```js
const RecipeSchema = new mongoose.Schema ({
    name: String,
    ingredients: String,
    instructions: String,
    image: String
})
```