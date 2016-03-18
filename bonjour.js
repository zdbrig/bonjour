/**
 * JBoss, Home of Professional Open Source
 * Copyright 2016, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var express = require('express');
var request = require('request');
var os = require('os');
var app = express();

function define_cors(resp){
    resp.set('Access-Control-Allow-Origin', '*');
}

function say_bonjour(){
    return "Bonjour de " + os.hostname();
}

app.get('/api/bonjour', function(req, resp) {
    define_cors(resp);
    resp.send(say_bonjour());
});

app.get('/api/bonjour-chaining', function(req, resp) {
    define_cors(resp);
    request('http://aloha:8080/aloha', {timeout: 2000}, function(error, response, body) {
        var replies = [];
        var aloha_return;
        if (!error && response.statusCode == 200) {
            aloha_return = body;
        }else{
            aloha_return = "Generic Aloha response";
        }
        replies.push(say_bonjour());
        replies.push(aloha_return);
        resp.send(JSON.stringify(replies));
    })
});

var server = app.listen(8080, '0.0.0.0', function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Bonjour service running at http://%s:%s", host, port)
});
