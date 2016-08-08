var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Nps = Schema({
    npsData: [[]]
})

module.exports = mongoose.model('Nps', Nps);