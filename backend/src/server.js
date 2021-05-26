require('dotenv').config()

const app = require('./app')
require('./database/db')

//* Setting port
const port = process.env.DB_PORT;

// function to activate server
async function server(){
          //Starting server from here
        try {
             await app.listen(app.get('port'))
        console.log(`Server running on port ${port}`)
        } catch (error) {
             console.log(error)
        }
}
server()