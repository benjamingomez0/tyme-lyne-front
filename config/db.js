const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost/localhost'

mongoose.connect(connectionString, {
                                        useNewUrlParser:true,
                                        useUnifiedTopology:true,
                                        useCreateIndex:true,
                                        useFindAndModify:false
});

mongoose.connection.on('connected',() =>{ 
    console.log(`Mongoose connected on ${connectionString}`)
});
mongoose.connection.on('disconnected', ()=>{
    console.log('Mongoose disconnected')
});
mongoose.connection.on('error',(err)=>{
    console.log('Mongoose error: ',err)
});