var express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 8000,
    dbController = require('./controllers/dbCtrl'),
    app = express(),
    mongoUri = 'mongodb://localhost:27017/nps';

app.use(bodyParser.json());
app.use(cors());
//app.use(express.static(__dirname + '/public'));

app.post('/api/npsData', dbController.addNps);

app.get('/api/npsData', dbController.getNps);

app.listen(port, function () {
    console.log('listening on port ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log('connected to mongod at ' + mongoUri);
});