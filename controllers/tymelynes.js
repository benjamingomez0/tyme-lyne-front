const express = require('express')
const router = express.Router()
const User = require('../models/Users')
const TymeLyne = require('../models/TymeLynes')



router.post('/dashboard', async(req,res)=>{
    try
    {
        const foundTL = await TymeLyne.find({"user":req.body.user_id},(err, tymelyne)=>{
            if(err)
            {
                console.log(err)
            }
            else
            {
                res.json(tymelyne)
                console.log('hit')
            }

        })
        console.log(foundTL)
    }
    catch(err)
    {
        console.log(err)
    }
})


router.post('/new', async (req,res)=>{
    try 
    {
        const createdTL = await TymeLyne.create(req.body)
        res.json(createdTL)
    }
    catch(err)
    {
        console.log(err)
    }
})

module.exports = router;
