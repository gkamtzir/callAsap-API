var mongoose = require('mongoose');

var emergencyNumbers = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    timestamps: true
});

var country = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    languages: {
        type: [String],
        required: true
    },
    responsiveness: {
        type: Number
    },
    simNeedFor112Calls: {
        type: Boolean
    },
    onlyEmergencyNumber: {
        type: Boolean,
        required: true
    },
    emergencyNumbers: {
        type: [emergencyNumbers]
    }
    timestamps: true
});

var Country = mongoose.model('country', country);

module.exports = Country;
