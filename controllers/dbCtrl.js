var Nps = require('../models/npsData');

module.exports = {
    
    addNps (req, res) {
        new Nps(req.body).save( (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    },
    
    getNps (req, res) {
        Nps.find().then( (response) => {
            res.status(200).send(response);
        })
    }
    
};