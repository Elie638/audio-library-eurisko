const Song = require('./model');
const trackAdded = require('../album/service').trackAdded();

exports.createSong = req => {
    const name = req.body.name;
    const singer = req.body.singer;
    const categoryID = req.body.categoryID;
    const albumID = req.body.albumID;
    const song = new Song({
        name: name,
        singer: singer,
        category: categoryID,
        album: albumID
    });
    song
        .save()
        .then(() => {
            trackAdded(albumID);
            console.log('Added Song to Album');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deleteSong = req => {
    const songID = req.body.id;
    song.findByIdAndDelete(songID)
        .then(() => {
            console.log('Song Deleted');
        })
        .catch(err => {
            console.log(err);
        })
}
