var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Nps = Schema({
    company: {type: String, required: true},
    date: {type: Date, default: Date.now},
    survey: [{
        question: {type: String},
        answer: {}
    }]
})

module.exports = mongoose.model('Nps', Nps);