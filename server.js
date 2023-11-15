var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model loading here
    bodyParser = require('body-parser');

//var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://greg-user:iy1UDSJTrS4xOznh@cluster0.jo9wm.mongodb.net/datatwin1?retryWrites=true&w=majority&ssl_cert_reqs=CERT_NONE';

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/Tododb');
mongoose.connect(url,{ useUnifiedTopology: true } ).then(
    () => {console.log('got in to mongo db data base - i think')},
    err => { 'ahh crap - we had an error'}
);

//MongoClient.connect(url,{ useUnifiedTopology: true } , function(err, db) {
// if (err) throw err; // todo change this to try catch

//console.log('got in to mongo db data base - i think');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

