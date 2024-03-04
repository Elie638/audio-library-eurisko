const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const songSchema = new Schema({
    name: String,
    singer: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }
})

module.exports = mongoose.model('Song', songSchema);