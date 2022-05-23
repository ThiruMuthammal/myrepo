/**
 * Import Mongoose
 */

const mongoose = require('mongoose');
require('dotenv/config');

/**
 * Db server connection
 */

 mongoose.connect(process.env.MY_DB, (err) => {
    if(err){
        console.log("DB Not Connected");
    } else
    console.log("DB Connected Successfully");
});

module.exports = mongoose;