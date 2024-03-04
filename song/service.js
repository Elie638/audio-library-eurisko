const Song = require('./model');
const album = require('../album/service');
const { findCategory } = require('../category/service');

exports.createSong = async req => {
    const name = req.name;
    const singer = req.singer;
    const categoryID = req.categoryID;
    const albumID = req.albumID;
    if(!findCategory(categoryID)) {
        const error = new Error('ID does not match to category');
        error.statusCode = 404;
        throw error;
    }
    if(!album.readAlbum(albumID)) {
        const error = new Error('ID does not match to album');
        error.statusCode = 404;
        throw error;
    }
    const song = new Song({
        name: name,
        singer: singer,
        categoryID: categoryID,
        albumID: albumID
    });
    await song.save()
    album.trackAdded(albumID);
    console.log('Added Song to Album');
    return song;
};

exports.deleteSong = async req => {
    const songID = req.id;
    if(!Song.findOne(songID)) {
        const error = new Error('ID does not match to spng');
        error.statusCode = 404;
        throw error;
    }
    await Song.findByIdAndDelete(songID);
    console.log('Song Deleted');
}

exports.deleteAllSongsInAlbum = async albumID => {
    await Song.deleteMany({ albumID: albumID });
    console.log('Deleted all songs from the album');
}
