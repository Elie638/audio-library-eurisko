//this code has not been tested, connection to the database failed because of ip problems

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const song = require('./song/service');
const album = require('./album/service');
const category = require('./category/service');

const app = express();

const testCase = async () => {
    const pop = await category.createCategory({name: "Pop", description: "This is a description"})
    const jazz = await category.createCategory({name: "Jazz", description: "This is a description"});
    const myalbum = await album.createAlbum({name: "My album", description: "This is a description"});
    await song.createSong({name: "song1", singer: "singer1", categoryID: pop._id, albumID: myalbum._id});
    await song.createSong({name: "song2", singer: "singer1", categoryID: pop._id, albumID: myalbum._id});
    const song = await song.createSong({name: "song3", singer: "singer1", categoryID: pop._id, albumID: myalbum._id});
    const tempalbum = await album.createAlbum({name: "Temp album", description: "This is a description"});
    await song.createSong({name: "song1", singer: "singer1", categoryID: jazz._id, albumID: tempalbum._id});
    await song.createSong({name: "song2", singer: "singer1", categoryID: jazz._id, albumID: tempalbum._id});
    await song.createSong({name: "song3", singer: "singer1", categoryID: jazz._id, albumID: tempalbum._id});
    album.deleteAlbum({albumID: tempalbum._id});
    song.deleteSong({songID: song._id});
} 

mongoose
  .connect(
    'mongodb://localhost:27017'
  )
  .then(() => {
    console.log('Connected to the database');
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });