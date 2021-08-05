const ctrl = {};
const path = require('path');
const { randomName, time } = require('../helpers/libs');
const fs = require('fs-extra');
const { Image } = require('../models/index')
const { cloudinaryDB } =require('../keytoserver/keys')


//Uso CLOUDINARY
const cloudinary =require('cloudinary')
cloudinary.config({
     cloud_name: cloudinaryDB.CLOUD_NAME,
     api_key: cloudinaryDB.API_KEY,
     api_secret: cloudinaryDB.API_SECRET
})

// const { ImageModel } = require('../models/image')

ctrl.index = async(req, res) => {
         const images =  await Image.find()
     //     console.log(images);
         
         res.status(200).send(images);
};
ctrl.create = async (req, res) => { 
     const { title, description} = req.body;

    const CloudImage = await cloudinary.v2.uploader.upload(req.file.path)
    const NewImage = new Image({
               title,
               description,
               imageURL: CloudImage.url,
               public_id : CloudImage.public_id
      })
      await NewImage.save()
     await fs.unlink(req.file.path)
     res.send('Image saved successfully!!!')
      
//   const saveImage = async () => {
//           const imgUrl = randomName();
//           const images = await Image.find({filename: imgUrl})
//           //Chequea si está el nombre repetido
//           if(images.length > 0){
//                saveImage()
//           }else{
//           const imgTemporalPath = req.file.path;
//           const ext = path.extname(req.file.originalname).toLocaleLowerCase();
//           const targetSavedPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

//           if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
//                await fs.copy(imgTemporalPath, targetSavedPath)
//                          // .then(() => console.log('Success...!!!'))
//                          // .catch(err => console.error(err));
//                const url = 'http://localhost:3002/upload/'
                         
//                const newImage = new Image({
//                               title: req.body.title,
//                               filename: url + imgUrl + ext,
//                               description: req.body.description
//                          }) 
//                // console.log(req.body);
//                const ImageSaved = await newImage.save()
//                console.log(newImage);
//                 await fs.remove(imgTemporalPath)
//                      }else{
//                console.log('Nop..!!');
               
//                res.status(500).json('Has a mistake')
//           }   
//           }
//         res.status(200).json('Works');
//   }
//  saveImage()
  
};
ctrl.like = (req, res) => {
	res.send('Like side');
};
ctrl.comment = (req, res) => {
	res.send('Comment');
};

ctrl.remove = async (req, res) => {
     const {image_id} = req.params
     const image = await Image.findByIdAndDelete(image_id)
     const result = await cloudinary.v2.uploader.destroy(image.public_id)
     console.log(result);
	res.send('Deleted');
};


module.exports = ctrl;
