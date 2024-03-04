const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const albumSchema = new Schema({
    name: String,
    description: String,
    showNbTracks: Boolean,
    lastSongAddedAt: String
}, { timestamps: true });

module.exports = mongoose.model('Album', albumSchema);