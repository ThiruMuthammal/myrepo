/**
 * Third party module
 */ 

const express = require('express');
const app = express();
const morgan = require('morgan');
const dbconfig = require('./dbConfig/db.config');


/**
 * Import Routes
 */

 const routes = require('./routes/routes');


/**
 * Middleware
 */ 

app.use(morgan('dev'));


/**
 * Body-Parser
 */

app.use(express.json());


/**
 * Route Middleware
 */

app.use("/api", routes);
 

 /**
  * Localhost
  */

 app.listen(4000, () => {
     console.log('Server started on port: 4000');
 });