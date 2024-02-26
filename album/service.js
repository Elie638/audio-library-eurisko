const Album = require('./model');

exports.createAlbum = req => {
    const name = req.body.name;
    const description = req.body.description;
    const createdAt = new Date().toISOString();
    const album = new Album({
        name: name,
        description: description,
        showNbTracks: false,
        createdAt: createdAt,
        updatedAt: createdAt 
    });
    album
        .save()
        .then(() => {
            console.log('Created Album');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updateAlbum = req => {
    const name = req.body.name;
    const description = req.body.description;
    const showNbTracks = req.body.showNbTracks;
    const updatedAt = new Date().toISOString();
    const album = new Album({
        name: name,
        description: description,
        showNbTracks: showNbTracks,
        updatedAt: updatedAt 
    });
    album
        .save()
        .then(() => {
            console.log('Updated Album');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.trackAdded = req => {
    const albumID = req.body.albumID
    const lastSongAddedAt = new Date().toISOString();
    const album = new Album({
        _id: albumID,
        lastSongAddedAt: lastSongAddedAt
    });
    album
        .save()
        .then(() => {
            console.log('Updated Album');
        })
        .catch(err => {
            console.log(err);
        });
};


exports.deleteAlbum = req => {
    const albumID = req.body.id;
    Album.findByIdAndDelete(albumID)
        .then(() => {
            console.log('Album Deleted');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.readAlbum = (req, res) => {
    const albumID = req.body.id;
    Album.findById(albumID)
        .then(album => {
            console.log(album);
        })
        .catch(err => {
            console.log(err);
        })
}

