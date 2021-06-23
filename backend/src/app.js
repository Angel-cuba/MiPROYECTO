const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//Start
const app = express()
require('dotenv').config()
     
//PORT 
app.set('port',process.env.PORT || 4000)

app.use(morgan('combined'))

/**     
 * * Parse request of content-type: application/json
 * * Parses incoming request with JSON payloads
 */
// app.use((req,res,next)=>{
//     res.setHeader('Acces-Control-Allow-Origin','*');
//     res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })
let options = {
     origin: 'http://localhost:3000',
     method: 'POST, GET, PUT, DELETE',
}     
     
app.use(cors());
app.use( express.json());
app.use( express.urlencoded( { extended: false } ) );
 
//Routes to validate new users
const authUser = require('./routes/Validate/authUser')

//Routes of Login and Register
app.use('/api/user', authUser)
app.use('/api/user', require('./routes/user'));
app.use('/comments', cors(), require('./routes/comments'))

module.exports = app;