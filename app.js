//this code has not been tested, connection to the database failed because of ip problems

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const song = require('./song/service');
const album = require('./album/service');
const category = require('./category/service');

const app = express();

const testCase = () => {
    category.createCategory({name: "Pop", description: "This is a description"});
    category.createCategory({name: "Jazz", description: "This is a description"});
    album.createAlbum({name: "My album", description: "This is a description"});
    song.createSong({name: "song1", singer: "singer1", categoryID: category.find({name: "Pop"}).id, albumID: album.find({name: "My album"}).id});
    song.createSong({name: "song2", singer: "singer1", categoryID: category.find({name: "Pop"}).id, albumID: album.find({name: "My album"}).id});
    song.createSong({name: "song3", singer: "singer1", categoryID: category.find({name: "Pop"}).id, albumID: album.find({name: "My album"}).id});
    album.createAlbum({name: "Temp album", description: "This is a description"});
    song.createSong({name: "song1", singer: "singer1", categoryID: category.find({name: "Jazz"}).id, albumID: album.find({name: "Temp album"}).id});
    song.createSong({name: "song2", singer: "singer1", categoryID: category.find({name: "Jazz"}).id, albumID: album.find({name: "Temp album"}).id});
    song.createSong({name: "song3", singer: "singer1", categoryID: category.find({name: "Jazz"}).id, albumID: album.find({name: "Temp album"}).id});
    //updates are supposed to happen automatically
    album.deleteAlbum({albumID: album.find({"name": "Temp album"}).id});
    song.deleteSong({songID: song.find({name: "song3", albumID: album.find({name: "Temp album"})}).id});
} 

mongoose
  .connect(
    'NO CONNETION'
  )
  .then(() => {
    console.log('Connected to the database');
    testCase();
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });