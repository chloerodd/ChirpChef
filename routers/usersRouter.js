const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose')
const {User} = require('../models/user')


router.get('/newuser', (req, res) => {
    res.render('newuser.js');
})

router.post('/signup', (req, res) => {
    console.log(req.body)
    console.log('Posting New User')
const requiredFields = ['firstName', 'lastName', 'email', 'password']
    for(let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i]
        if(!(field in req.body)) {
            const errorMessage = `missing ${field} in request body`
            console.error(errorMessage)
            return res.send(errorMessage)
        }
    }
    //normalizing email
    req.body.email = req.body.email.toLowerCase()
    console.log(req.body)
    const { firstName, lastName, email, password } = req.body

    //now ready to post
    User.create{};
})





module.exports = router;