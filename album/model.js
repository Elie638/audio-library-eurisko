const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    description: String,
    showNbTracks: {
        type: Boolean,
        default: false
    },
    lastSongAddedAt: String
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);