//server set up variables
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var allDataRouter = require('./routes/alldata_router.js');


//app stuff
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));
app.use('/alldata', allDataRouter )

//server listening
app.listen(port, function() {
    console.log('listening on port', port);
})

//server post


