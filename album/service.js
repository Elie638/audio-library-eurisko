const song = require('../song/service');
const Album = require('./model');

exports.createAlbum = async req => {
    const name = req.name;
    const description = req.description;
    const album = new Album({
        name: name,
        description: description,
        showNbTracks: false,
    });
    await album.save()
        console.log('Created Album');
        return album;
};

exports.updateAlbum = async (updated, albumID) => {
    if(!Album.findOne(albumID)) {
        const error = new Error('ID does not match to album');
        error.statusCode = 404;
        throw error;
    }
    const req = await Album.findByIdAndUpdate(albumID,
        { $set: updated });
    console.log('Updated Album');
    return updatedAlbum;
};

exports.trackAdded = async albumID => {
    await Album.findByIdAndUpdate(albumID,
        { $set: { lastSongAddedAt: new Date().toISOString() } });
    console.log('Updated Album');
};


exports.deleteAlbum = async req => {
    const albumID = req.id;
    if(!Album.findOne(albumID)) {
        const error = new Error('ID does not match to album');
        error.statusCode = 404;
        throw error;
    }
    await song.deleteAllSongsInAlbum(albumID);
    await Album.findByIdAndDelete(albumID);
    console.log('Album Deleted');
}

exports.readAlbum = async req => {
    const albumID = req.id;
    const album = await Album.findById(albumID)
    return album;
}

exports.readAllAlbum = async () => {
    const albums = await Album.find();
    return albums;
}

