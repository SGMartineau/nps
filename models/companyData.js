var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Company = Schema({
    name: {type: String, required: true},
    data: [{
        npsData: [{ type: Schema.Types.ObjectId, ref: 'Nps'}],
        date: {type: Date, default: new Date()}
    }]
})

module.exports = mongoose.model('Company', Company);