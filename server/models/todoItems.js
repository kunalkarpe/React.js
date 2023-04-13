const mongoose = require('mongoose');
// Cretaing schema

const TodoItemsSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todo', TodoItemsSchema)                                              