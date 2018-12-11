const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required:true
    },
    sizes: {
        type: Array,
        required: true
    },
    stock: {
        type:Number,
        required:true
    },
    category: {
        type: String,
        required:true
    }
})


module.exports = Product = mongoose.model('product', ProductSchema);