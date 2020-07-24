const mongoose  = require('mongoose');

const tymeLyneSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId,
        ref: 'User'},
    defaultStart:Number,
    tasks: [String]
});

const TymeLyne = mongoose.model('TymeLyne',tymeLyneSchema);

module.exports = TymeLyne;