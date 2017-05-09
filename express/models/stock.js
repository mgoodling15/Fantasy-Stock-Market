const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create stock schema and model 
const StockSchema = new Schema({
    value: {
        type: Number,
        required: [true, 'Stock value is required']
    },
    nameCode: {
        type: String,
        required: [true, 'Stock name code is required']
    }
    
});

const Stock = mongoose.model('stock', StockSchema);

module.exports = Stock;
