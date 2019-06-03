const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    composition:{
        type: String,
        required: true,
    },
    method_cook:{
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('recipes', RecipeSchema);