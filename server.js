const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const recipesRouter = require('./controllers/routes/dashboard.js');

app.use('/recipes',recipesRouter)
//dashboard
app.get('/', (req, res) => {
    res.render("index.ejs");
})

// app.get('/new-post', (req, res) => {
//     res.render("new-post.ejs");
// })






app.listen(3000, () => {
    console.log('Server listening on port 3000');
})