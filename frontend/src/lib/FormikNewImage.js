import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateImage, initialValuesImage } from './validateForms/validateImage'


export const formikNewImage = {
     initialValues : initialValuesImage,

     onSubmit: values => {
          toast.configure()
          console.log(values)
          alert(JSON.stringify(values, null, 2))
          //  e.preventDefault();
           
//       const file = e.target.files[0]
      

           
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const Warning = () => {
// 				toast.info('Uploading images', {
// 					position: toast.POSITION.TOP_CENTER,
// 					autoClose: 3000
// 				})
// 			}
     
//       const formData = new FormData()

//       formData.append('image', file)
//       formData.append('title', values.title)
//       formData.append('description', values.description)

    
//      await fetch(`${process.env.REACT_APP_BACKEND_MONGODB_URL}`,{
//                method: 'POST',
//                body: formData,
//                headers: {
//                     'Accept': 'multipart/form-data'
//                }
//      })
//      .then(response => {
//           const resImg=response.json()
          
//           console.log(resImg)
//      }).catch(error => {console.log(error)})
//      await delay(Warning(),5000);
//      window.location.reload()
     },
     validationSchema: validateImage,
     validateOnChange: false,
     validateOnBlur: true

}