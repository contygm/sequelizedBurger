var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
var models  = require('./models');

var app = express();
var sequelizeConnection = models.sequelize;

sequelizeConnection.sync({force:true})

app.use(express.static(process.cwd() || __dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

var models = require('./models');



app.use('/', routes);

var PORT = 3306;
app.listen(process.env.PORT || PORT, function () {
	console.log('App listening on PORT ' + PORT);
});