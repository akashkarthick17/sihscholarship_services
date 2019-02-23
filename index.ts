
import "reflect-metadata";
import { useExpressServer } from 'routing-controllers';
import express = require('express');
import { MongoDBClient } from "./modules/utility/db.utility";
import * as bodyParser from 'body-parser'
// Creates an Express application using the top-level function
const app = express();
// Define port number as 3001
const port = 3001;

app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "false");

    // Pass to next layer of middleware
    next();
});
// Routes HTTP GET requests to the specified path "/" with the specified callback function 
app.get('/', (request, response) => { response.send('Hello, World! by Akash Karthick'); });
// Make the app listen on port 3000 

useExpressServer(app, {
    controllers: [__dirname + '/**/controller/*.js']
});
app.listen(port, () => {
    console.log('Server listening on http://localhost:' + port + ' dir name ' + __dirname);
});