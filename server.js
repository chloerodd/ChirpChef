const express = require('express');
const app = express();
const mongoose = require ('mongoose');
const methodOverride = require('method-override')
app.set('view engine', 'ejs');
const bodyParser = require('body-parser')
const recipesRouter = require('./routers/recipesRouter.js');
const { PORT, DATABASE_URL } = require('./config.js');

app.use(express.static("public"))
app.use(express.json()); //looks at any requests that comes in that has json in it and parses it into a JS object that you can access the keys and use like a regular object so that my app can manipulate it.
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use('/recipes',recipesRouter)



//dashboard
// app.get('/', (req, res) => {
//     res.render("index.ejs");
// })

// app.get('/new-post', (req, res) => {
//     res.render("new-post.ejs");
// })






//------------------------------------------
mongoose.connect(DATABASE_URL).then(() => {
    app.listen(PORT, () => {
      console.log(`Your app is listening on port ${PORT}`);
    });
  });
  
  //now we have mongoose calling the app.listen to boot up the server, but ALSO he is connecting us to the DATABASE