    
    const express = require('express');

    const app =express();
    import db from './models/db'
    const db =require('./models/db');
    app.get("/",  (req,res)=> {
        res.send("Iniciar");
    });

    var http = require('http');
    var app = require('app');
    
    var path = new app.Server(`${__dirname}/l;
    ocalhost/#app`)
    http.createServer(function (req, res) {
        req.addListener('end', function () {
            path.serve(req, res)
        }).resume()
      }).listen(8080);
    
    
      console.log('Server criado em: localhost:8080');