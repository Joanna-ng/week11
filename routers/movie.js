var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');
module.exports = {
    getAll: function (req, res) {
        Movie.find().populate('actors').exec(function (err, movies) {
            if (err) return res.status(400).json(err);
            res.json(movies);
        });
    },
    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);
            res.json(movie);
        });
    },
    getOne: function (req, res) {
        Movie.findOne({ _id: req.params.id })
            .populate('actors')
            .exec(function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();
                res.json(movie);
            });
    },
    updateOne: function (req, res) {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },

    deleteOne: function (req, res) {
        Movie.findOneAndRemove({ _id: req.params.id }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },

    addActor: function (req, res) {
        Movie.findOne({ _id: req.params.movieID }, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            Actor.findOne({ _id: req.params.actorID }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movie.actors.push(movie._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            })
        });
    },


    deleteActor: function (req, res){
        // let deleteActor = req.body.movid;
        // deleteActor = new mongoose.Types.ObjectId();
        // let theMovie = req.body.actid;
        // theMovie = new mongoose.Types.ObjectId();
        let deleteActor = mongoose.Types.ObjectId(req.body.actid);

        let theMovie = mongoose.Types.ObjectId(req.body.movid);

        Movie.findOne({_id: theMovie}, function (err, movie){
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();

            Actor.findOne({ _id: deleteActor}, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                movie.actors.remove(actor._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            });

        });
    },

    specialGET: function (req, res) {
        Movie.find({year: {$gte: req.params.year2, $lte: req.params.year1}}, function (err, movies) {
            if (err) return res.status(400).json(err);
            res.json(movies);
        });
    },

    specialUPDATE: function (req,res) {
        Movie.updateMany({year: {$gt:1995}} , function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();
            res.json(movie);
        });
    },

    deleteMany: function (req,res) {
        Movie.deleteMany({ year: {$lt: req.params.year} }, function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    }
    
};