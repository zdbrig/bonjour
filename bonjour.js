var express = require('express');
var os = require('os');
var app = express();


app.get('/bonjour', function(req,resp){
  resp.send("Bonjour de " + os.hostname());
});

var server = app.listen(8080,  '0.0.0.0', function(){
  var host = server.address().address
  var port = server.address().port

  console.log("Bonjour service running at http://%s:%s", host, port)
});
