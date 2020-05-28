const express   = require('express')
const app       = express()
const PORT      = 8000

// models
const User = require('./models/Users')

//middlewear
app.use(express.json());

//database
require('./config/db')

// to do *user controller*

app.listen(PORT, ()=>{
    
    console.log(`...Listening on port ${PORT}`)

});