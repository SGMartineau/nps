var Nps = require('../models/npsData'),
    Company = require('../models/companyData');

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
    },
    
    addCompany (req, res) {
        new Company(req.body).save( (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        })
    },
    
    getCompany (req, res) {
        Company.find().populate('npsData').then( (response) => {
            res.status(200).send(response);
        })
    }
    
};