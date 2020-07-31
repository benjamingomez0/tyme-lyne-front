const mongoose  = require('mongoose');

const tymeLyneSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    defaultStart:Number,
    tasks: [{   name:String, 
                obligation: Boolean, 
                hours: Number,
                priority: Number 
            }]
});

const TymeLyne = mongoose.model('TymeLyne',tymeLyneSchema);

module.exports = TymeLyne;