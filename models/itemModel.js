const mongoose = require('mongoose');

const itemModel = new mongoose.Schema({
    item:{
        type : String,
        required : true
    },
    price:{
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('Item', itemModel)