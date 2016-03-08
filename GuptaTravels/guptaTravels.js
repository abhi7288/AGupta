var express = require('express');

var app = express();

var handlebars = require('express3-handlebars')
						.create({ defaultLayout :'main'});

var fortunes = [
				"Conquer your fears or they will conquer you",
				"River needs spring.",
				"Do not fear what you don't know.",
				"YOu will have a pleasant surprise.",
				"Whenever possible, keep it simple"
			];

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


//Http Get method for the Home Page
app.get('/', function(req, res) {
	res.render('home');
});


// Http get method for the About Page
app.get('/about', function(req, res) {
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', {fortune: randomFortune});
});

// Custom 404 page


app.use(function(req, res) {
	res.status(404);
	res.render('404');
});


//Custom 500 Page

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.status(500);
	res.render('500');

});

app.listen(app.get('port'), function() {
	console.log('Express app started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});

