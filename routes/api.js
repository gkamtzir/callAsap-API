var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var country = require('../models/country.js');
var apiRouter = express.Router();

apiRouter.use(bodyParser.json());

apiRouter.route('/countries')
    .get(function(req, res, next) {

        country.find({}, '-_id name', function(err, countries) {

            if (err) throw err;

            var countriesArray = countries.map(function(country) {

                return country.name;

            });

            res.json(countriesArray);

        });

    });

apiRouter.route('/countries/details')
    .get(function(req, res, next) {

        country.find({}, '-_id', function(err, countries) {

            if (err) throw err;
            res.json(countries);

        });

    });

apiRouter.route('/country/:countryName')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.replace(/\b\w/g, function(l){ return l.toUpperCase() })

        country.findOne({name: countryParams}, '-_id', function(err, country) {

            if (err) throw err;
            res.json(country);

        });

    });

apiRouter.route('/country/:countryName/emergencies')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.slice(0, 1).toUpperCase() + req.params.countryName.toLowerCase().slice(1);

        country.findOne({name: countryParams}, '-_id emergencyNumbers', function(err, emergencyNumbers) {

            if (err) throw err;
            res.json(emergencyNumbers.emergencyNumbers);

        });

    });

apiRouter.route('/country/:countryName/languages')
    .get(function(req, res, next) {

        var countryParams = req.params.countryName.slice(0, 1).toUpperCase() + req.params.countryName.toLowerCase().slice(1);

        country.findOne({name: countryParams}, '-_id languages', function(err, languages) {

            if (err) throw err;
            res.json(languages.languages);

        });

    });

module.exports = apiRouter;
