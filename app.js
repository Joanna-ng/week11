//https://hub.packtpub.com/building-movie-api-express/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const actors = require('./routers/actor');
const movies = require('./routers/movie');
const app = express();
const path = require('path');
app.listen(8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');
});

app.use("/", express.static(path.join(__dirname, "dist/week11work")));

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/listactors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:id', actors.deleteOne);
//
app.delete('/actors/:id/All', actors.deleteActorMovie);
//
app.delete('/actors/:actid/:movid', actors.deleteMovie);



//Movie RESTFul  endpoints
app.get('/listmovies', movies.getAll);
app.post('/movies', movies.createOne);
app.get('/movies/:id', movies.getOne);
app.put('/movies/:id', movies.updateOne);
app.post('/movies/:movieID/:actorID/actors', movies.addActor);
app.delete('/movies/:id', movies.deleteOne);

//
app.delete('/movies/:movid/:actid', movies.deleteActor);
//
app.get('/movies/:year1/:year2', movies.specialGET);

app.put('/movies/', movies.specialUPDATE);
//
app.delete('/movies/deleteMany/:year', movies.deleteMany);
//
app.get('/actors/movies', actors.moreThanTwo);