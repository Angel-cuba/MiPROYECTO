const mongoose = require('mongoose')
const  Schema  = mongoose.Schema
const path = require('path')

const imageSchema = new Schema({
    // id: {type: String},
    title : {type: String, trim: true},
    imageURL : {type: String},
    description : {type: String, trim: true},
    public_id : {type: String},
    timestamp: {type: Date, default: Date.now()}

})

// imageSchema.virtual('uniqueId')
//         .get(function () {
//             return this.filename.replace(path.extname(this.filename), '')
//         })

module.exports = mongoose.model('Image', imageSchema, 'imgs')


//  const ImageModel = mongoose.model('ImageModel', imageSchema, 'imgs')

//  module.exports = ImageModel