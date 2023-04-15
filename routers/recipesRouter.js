const express = require('express');
const router = express.Router();



// index return all recipes (dashboard)
router.get('/', (req, res) => {
    res.render('index.ejs');
})
 

//post new recipe 
router.get('/new-post', (req, res) => {
    res.render('new-post.ejs');
})

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