const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create player schema and model 
const LeagueSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name field is required']
    },
    //list of players
    //start/end time
    //league logo
});

const League = mongoose.model('league', LeagueSchema);

module.exports = League;
