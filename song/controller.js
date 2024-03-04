const songService = require('./service');
const Joi = require('joi');

const songSchema = Joi.object({
    name: Joi.string().min(5).required(),
    artist: Joi.string().min(10).required(),
    albumID: Joi.string().required(),
    categoryID: Joi.string().required(),
});

exports.create = async (req, res) => {
    try {
        await songSchema.validateAsync(req.body);
        const song = {
            name: req.body.name,
            artist: req.body.artist,
            albumID: req.body.albumID,
            categoryID: req.body.categoryID,
        };
        const result = await songService.createSong(song);
        res.status(200).json({ message: 'Song created successfully', result });
    } catch (error) {
        res.status(error.statusCode || 422).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    const songID = req.body.songID;
    if(!songID) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    try {
        await songService.deleteSong(songID);
        res.status(200).json({ message: 'Song deleted' });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}
