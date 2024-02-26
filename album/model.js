const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    showNbTracks: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: String,
        required: true
    },
    updatedAt: {
        type: String,
        required: true
    },
    lastSongAddedAt: {
        type: String
    }
});

module.exports = mongoose.model('Album', albumSchema);