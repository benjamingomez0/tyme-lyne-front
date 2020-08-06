const express  = require('express')
const router   = express.Router()
const User     =  require('../models/Users')
const bcrypt   = require('bcrypt')


router.get('/users', (req,res) =>{
    return res.send('GET HTTP method on user resource')
})

// User Registration
router.post('/users/new', async (req,res)=>{
    
    const display_name = req.body.display_name
    const password     = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    const email        = req.body.email
    const foundEmail = await User.findOne({email:req.body.email});
    
    //check to ensure email has not been taken
    if(foundEmail)
    {
        res.json(
            {
                message: "This email has already been registered",
                code:400
            }
        )
    }
    else
    {   //instantiate the new user
        const createdUser = new User({display_name,password,email})

        //add new user to db then send user ID and username as response
        createdUser.save()
        .then(()=>res.json(
            {
            user_id: createdUser._id,
            display_name : createdUser.display_name,
            message: "success, user created!",
            code:200
        }))
        .catch(err => res.status(400).json(`Error is: ${err}`))
    }
});

//User Login
router.post('/users/login', async (req,res)=>{
    try
    {
        const foundUser = await User.findOne({ email : req.body.email });

        if(foundUser)
        {
            if(bcrypt.compareSync(req.body.password, foundUser.password))
            {
                
                res.json({
                    user_id: foundUser._id,
                    display_name : foundUser.display_name,
                    message: "success, user logged in!",
                    code:200
                })
            }
        }
    }
    catch(err)
    {
        res.json({
            message: "Username or password is incorrect",
            err: err
            })
    }
});

module.exports = router;