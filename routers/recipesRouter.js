const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
const {Recipe} = require('../models/recipe')


//==============ROUTES============================

// index return all recipes (dashboard)
router.get('/', async (req, res, next) => {
    try{
        const recipes = await Recipe.find({})
        res.render('index', {recipes});
    }
    catch(err){
    console.log("error")      
     next();
    }
})
 

// create new
router.get('/newform', (req, res) => {
    res.render('new.ejs');
})

//post
router.post('/', async (req, res, next) => {
    try{
        const recipe = await Recipe.create(req.body)
        res.redirect(`/recipes`);
    }
    catch(err){
        res.redirect('/recipes');
        next();
    }
})

//delete
router.delete('/:id', async (req, res) => {
    const recipes = await Recipe.findByIdAndDelete(req.params.id)
    res.redirect('/recipes')
})

//show
router.get('/:id', async (req , res, next) => {
    try {
    const recipe = await Recipe.findById(req.params.id);

    res.render('show', {recipe});
    }
    catch(error) {
        console.log(error);
        next();
    }
})

//edit and update
router.get('/:id/edit', async (req, res, next) => {
    try{
    const recipe = await Recipe.findById(req.params.id);
    res.render('edit', {recipe: recipe});
    }
    catch(error){
        console.log("error");
        next();
    }
})
router.put('/:id', async (req, res) =>{
    const id = req.params.id;
    const recipe = await Recipe.findByIdAndUpdate(id, req.body, {new: true,})
    res.redirect('/recipes')
})


//Seed
// router.get('/seed', async (req, res) => {
// 	const recipe = await Recipe.deleteMany({});
// 	const recipes = await Recipe.create(startRecipes);
// 	res.redirect('/recipes');
// });

module.exports = router;