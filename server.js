/**
 * Module dependencies.
 */
var express = require('express')
,	path = require('path');

var favicon = require('serve-favicon')
,	methodOverride = require('method-override')
,	bodyParser = require('body-parser')
,	errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
var engine = require('ejs-locals');
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// routing
require('./app/routes.js')(app);

var server = app.listen(app.get('port'), function(){
  console.log('TdF Screen Web Server now listening on port ' + app.get('port'));
});

