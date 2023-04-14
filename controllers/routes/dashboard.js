const express = require('express');
const router = express.Router();



//index return all recipes (dashboard)
// router.get('/', (req, res) => {
//     res.render('recipes/index.ejs', {recipes: recipe });
// })
 

//post new recipe 
// router.post('/new-post', (req, res) => {
//     const newRecipe = req.body;
//     res.send('Chirp created sucessfully!');
// })

//index return all recipes (dashboard)
router.get('/newform', (req, res) => {
    res.render('new.ejs');
})

// router.get('/newform', (req, res) => {
//     res.render('new.ejs');
// })



//delete
// router.delete('/recipes/:id', (req, res) => {
//     const recipeId = req.params.id;
// })





module.exports = router;