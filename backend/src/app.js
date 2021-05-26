const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//Start
const app = express()
require('dotenv').config()


//app.set('port',process.env.DB_PORT )


app.use(morgan('dev'))


/**
 * * Parse request of content-type: application/json
 * * Parses incoming request with JSON payloads
 */
app.use(cors());
app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

//Routes to validate new users

//Routes of Login and Register


// app.listen( port, () => {
//     console.log(`Server running in port ${port}`);
// });

module.exports = app;