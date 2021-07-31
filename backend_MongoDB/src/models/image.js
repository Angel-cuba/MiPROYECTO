const mongoose = require('mongoose')
const  Schema  = mongoose.Schema
const path = require('path')

const imageSchema = new Schema({
    title : {type: String},
    filename : {type: String},
    description : {type: String},
    timestamp: {type: Date, default: Date.now()}

})

imageSchema.virtual('uniqueId')
        .get(function () {
            return this.filename.replace(path.extname(this.filename), '')
        })

module.exports = mongoose.model('Image', imageSchema, 'imgs')


// const Image = mongoose.model('Image', imageSchema, 'imgs')

// module.exports = Image