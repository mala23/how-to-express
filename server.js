var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express();

function log(req, res, next) {
    console.log(names);
    next();
};

app.use(bodyParser.urlencoded({ extended: true }));

var names = [];

app.all('/', log, function(req, res, next) {
    console.log('From all'); 
    next();
});

app.get('/', function(req, res) {
    res.render('index.jade', { names: names });
});

app.post('/', function(req, res) {
    names.push(req.body.name);
    res.redirect('/');
});

app.listen(3000);
