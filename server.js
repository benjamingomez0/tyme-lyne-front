const express   = require('express')
const app       = express()
const cors      = require('cors')
const PORT      = process.env.PORT || 8000


//configures so we can have environment var in the dotenv file
/************************/
require('dotenv').config()

//database
/************************/
require('./config/db')

// models
/************************/
const User = require('./models/Users')
const TymeLyne = require('./models/TymeLynes')

//middlewear
/************************/
app.use(cors());
app.use(express.json());

// mounting controllers
/************************/

//user controller
const userController = require('./controllers/users')
app.use('/auth', userController)

//tyme lyne controller 
const tlController = require('./controllers/tymelynes')
app.use('/tl', tlController)

app.get('/',(req,res)=>{
    res.send('COMING IN HOT!')
})

//starts our server
/************************/
app.listen(PORT, ()=>{
    console.log(`...Listening on port: ${PORT}`)
});