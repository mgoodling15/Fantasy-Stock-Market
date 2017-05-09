const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create player schema and model 
const PlayerSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name field is required']
    },
    bio: {
        type: String,
        required: [true, 'Bio field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    //picture: {
    //ADD PICTURE
    //},
    portfolio: {
        type: Number,
        default: 100000,
        required: [true, 'Portfolio field is required']
    }
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
