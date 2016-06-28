var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./config/webpack.dev.js');
var fs = require("fs");
var app = express();
var compiler = webpack(config);
var port = process.env.PORT || 3000;
var _ = require("lodash");
app.use(require('webpack-dev-middleware')(compiler, config));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/index', (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
</head>
<script src="https://code.jquery.com/jquery-2.2.4.js" integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI=" crossorigin="anonymous"></script>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<body>
  
  <div class="container">
  <div class="row">
  <div class="col-lg-12">
  <index></index>
  </div>
  <div>
  <script>
  window["serverState"] = ${ fs.readFileSync(__dirname + "/db.json") }
  </script>
  
  <script src="app.js"></script>

</body>
</html>
`);
});

app.listen(port, 'localhost', err => {

  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);




  fs.readdir(__dirname + "/app/new/mock",function(err,files) {
      _.each(files,function(item) {
          if (item.indexOf(".json") >0 )
          {
            var rt = item.replace("_","/").replace(".json","");
            console.log(`Adding route ${rt}`);
            app.get("/" + rt,function(req,res,next) {
              res.contentType="text/json";
              res.sendFile(__dirname + "/app/new/mock/" + item);
           
            });
          }
      });
  });



  // var jsonServer = require('json-server')
  // var server = jsonServer.create()
  // var router = jsonServer.router('db.json')
  //var middlewares = jsonServer.defaults()

  //app.use(middlewares);
  //app.use(router);

  app.listen(3001, function () {
    console.log('JSON Server is running')
  })

});



