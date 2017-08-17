var express = require('express');
var mongoose = require('mongoose');

var country = require('../models/country.js');
var apiRouter = express.Router();

apiRouter.route('/country')
    .get(function(req, res, next) {

        country.find({}, function(err, countries) {

            if (err) throw err;
            res.json(countries);

        });

    });
