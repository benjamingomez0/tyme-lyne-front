const express = require('express')
const router  = express.Router()
const User    =  require('../models/Users')
const bcrypt  = require('bcryptjs')


router.get('/users', (req,res) =>{
    return res.send('GET HTTP method on user resource')
})

// User Registration
router.post('/users/new', async (req,res)=>{
    
    const display_name = req.body.display_name
    const password     = req.body.password
    const phash        = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    const email        = req.body.email

    //instantiate the new user
    const createdUser = new User({display_name,phash,email})

    //add new user to db then send user ID as response
    createdUser.save()
    .then(()=>res.json(
        {
        user_id: createdUser._id,
        message: "success, user created!",
        code:200
    }))
    .catch(err => res.status(400).json(`Error is: ${err}`))

  
});


module.exports = router;