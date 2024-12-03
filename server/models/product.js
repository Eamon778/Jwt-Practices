const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    rating : {type: Number, required: true, min: 1, max: 5},
    comment: {type: String}
}, {timestamps: true})

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, trim: true},
    images: [{type: String, required: true}],
    price: {type: Number, required: true},
    oldPrice: {type: Number},
    details: {type: String, trim: true},
    colors: [{type: String, required: true}],
    sizes: [{type: String, required: true,}],
    stock: {type:Number, required: true, default: 0},
    category: {type: String, required: true},
    reviews: [ReviewSchema],
    averageRating: {type: Number, default: 0}
}, {timestamps: true})

module.exports = mongoose.model('Products', ProductSchema)