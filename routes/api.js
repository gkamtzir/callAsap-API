var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var country = require('../models/country.js');
var apiRouter = express.Router();

apiRouter.use(bodyParser.json());

apiRouter.route('/country')
    .get(function(req, res, next) {

        country.find({}, '-_id', function(err, countries) {

            if (err) throw err;
            res.json(countries);

        });

    });

apiRouter.route('/country/:countryName')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.slice(0, 1).toUpperCase() + req.params.countryName.toLowerCase().slice(1);

        country.find({name: countryParams}, '-_id', function(err, country) {

            if (err) throw err;
            res.json(country);

        });

    });

apiRouter.route('/country/:countryName/emergencies')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.slice(0, 1).toUpperCase() + req.params.countryName.toLowerCase().slice(1);

        country.findOne({name: countryParams}, '-_id', function(err, country) {

            if (err) throw err;
            res.json(country.emergencyNumbers);

        });

    });

apiRouter.route('/country/:countryName/languages')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.slice(0, 1).toUpperCase() + req.params.countryName.toLowerCase().slice(1);

        country.findOne({name: countryParams}, '-_id', function(err, country) {

            if (err) throw err;
            res.json(country.languages);

        });

    });

module.exports = apiRouter;
