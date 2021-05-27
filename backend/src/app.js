const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//Start
const app = express()
require('dotenv').config()


//app.set('port',process.env.DB_PORT )
//PORT 
app.set('port',process.env.PORT || 3000)



app.use(morgan('combined'))

/**
 * * Parse request of content-type: application/json
 * * Parses incoming request with JSON payloads
 */
app.use(cors());
app.use( express.json());
app.use( express.urlencoded( { extended: false } ) );

//Routes to validate new users
const authUser = require('./routes/Validate/authUser')

//Routes of Login and Register
app.use('/api/user', authUser)
app.use('/api/user', require('./routes/user'))

//// app.listen( port, () => {
//     console.log(`Server running in port ${port}`);
// });

module.exports = app;