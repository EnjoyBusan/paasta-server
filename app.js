var express = require('express');
var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var routes = require('./routes/index');
var api = require('./routes/rest/mongo')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
//
// app.get( '/Ranking', api.ranking)
// app.get( '/addLog', api.addLog)
// app.get( '/public_health', api.public_health)
//

app.use('/',(err,req,res)=>{
    searchOrgAllList = function(cb){
        pool.acquire(function(err, db) {
            if (err) console.log("커넥션 획득 실패 " + err);
            else
            {
                var collection = db.collection('Orgs');
                var query = {};

                collection.find(query).toArray(function(err, result) {
                    if (err)	console.log(err);
                    else		console.log(result);
                    pool.release(db);
                    if (result === null) cb(err, []);
                    else		     cb(err, JSON.parse(JSON.stringify(result).replace(/"_id":/g, '"id":')));
                });

            }
        });
    }
    searchOrgAllList();
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
