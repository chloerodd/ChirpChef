const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
const {Recipe} = require('../models/recipe')


//==============ROUTES============================

// index return all recipes (dashboard)
router.get('/', (req, res) => {
    res.render('index.ejs');
})
 

// //post new recipe 
// router.get('/new-post', (req, res) => {
//     res.render('new-post.ejs');
// })

// create new
router.get('/newform', (req, res) => {
    res.render('new.ejs');
})

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
router.delete('/:id', async (req, res) => {
    const recipes = await Recipe.findByIdAndDelete(rreq.params.id)
    res.redirect('/recipes')
})

//show
router.get('/:id', async (req , res) => {
    const showRecipe = await Recipe.findById(req.params.id)
    res.render('show.ejs')
})

//edit and update
router.get('/:id/edit', async (req, res) => {
    const showRecipe = await Recipe.findById(req.params.id)
    res.render('edit.ejs')
})



module.exports = router;