const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
const {Recipe} = require('../models/recipe')


//==============ROUTES============================

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

//post
router.post('/', (req, res) => {
    console.log(req.body)
    Recipe.create(req.body)
    .then(createdRecipe => {
        console.log(createdRecipe)
        res.redirect('/recipes')
    })
})

//delete
// router.delete('/recipes/:id', (req, res) => {
//     const recipeId = req.params.id;
// })





module.exports = router;