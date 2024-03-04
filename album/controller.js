const albumService = require('./service');

exports.create = async (req, res) => {
    const album = {};
    if(!req.body.name || !req.body.description) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    album.name = req.body.name;
    album.description = req.body.description;
    try {
        const createdAlbum = await albumService.createAlbum(album);
        res.status(201).json({ message: 'Album created successfully' , createdAlbum });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    const updateObject = {};
    if (req.body.name) updateObject.name = req.body.name;
    if (req.body.description) updateObject.description = req.body.description;
    if (req.body.showNbTracks !== undefined) updateObject.showNbTracks = req.body.showNbTracks;
    if(!req.albumID) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    const albumID = req.albumID;
    try {
        const album = await albumService.updateAlbum(updateObject, albumID);
        res.status(200).json({ message: 'Album updated successfully' , album });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

exports.read = async (req, res) => {
    const albumId = req.params.id;
    if(!albumId) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    try {
        const album = await albumService.readAlbum(albumId);
        res.status(200).json({ message: 'Album fetched' , album });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

exports.readAll = async (req, res) => {
    try {
        const albums = await albumService.readAllAlbum();
        res.status(200).json({ message: 'Album fetched' , albums });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}

exports.delete = async (req, res) => {
    if(!albumId) {
        const error = new Error("Required parameter missing");
        error.statusCode = 422;
        throw error;
    }
    try {
        const album = await albumService.deleteAlbum(albumId);
        res.status(200).json({ message: 'Album deleted' });
    } catch (error) {
        res.status(error.statusCode || 500).json({ error: error.message });
    }
}