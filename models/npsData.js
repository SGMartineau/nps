var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Nps = Schema({
    company: {type: String, required: true},
    questions: [{type: String, required: true}],
    answers: [{}]
})

module.exports = mongoose.model('Nps', Nps);