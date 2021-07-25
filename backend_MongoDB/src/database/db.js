const mongoose = require('mongoose')
const {database}  =require('../keytoserver/keys')
require('dotenv').config()

mongoose.connect(database.URI, { 
     useNewUrlParser : true,
     useUnifiedTopology: true,
})
          .then(db => console.log('Connected to database at mongodb'))
          .catch(err => console.log(err))