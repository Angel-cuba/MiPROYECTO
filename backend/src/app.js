const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const errorhandler = require('errorhandler')


//middleware
const auth = require('./routes/middleware/auth')


//Start
module.exports = (app) => {

// const app = express()
require('dotenv').config()
     
//PORT 
app.set('port',process.env.PORT || 3001)

app.use(morgan('combined'))

// module.exports = function(app) {} 
//   app.use(function(req, res, next) {
//     res.header(
//       {"Access-Control-Allow-Headers":"*"}
//     );
//     next(); 
//   });  
let options = { 
     origin: '*',
     method: 'POST, GET, PUT, DELETE',
}     
     
app.use(cors(options));
app.use( express.json());
app.use( express.urlencoded( { extended: false } ) );

 
//Routes to validate new users
const authUser = require('./routes/Validate/authUser')

//Routes of Login and Register 
app.use('/api/user', authUser)
app.use('/api/user', require('./routes/user'));
app.use('/comments',  require('./routes/comments'))

	//errorhandler
	if ('development' === app.get('env')) {
		app.use(errorhandler);
	}

return app

}


// module.exports = app;