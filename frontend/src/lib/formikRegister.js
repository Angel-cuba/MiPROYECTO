// import useHistory from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValues, validateRegisters } from './validateForms/validateRegister'
// const history = useHistory()

export const formikRegister = {  
   

        initialValues : initialValues,
       
        onSubmit: async (values) => {
             try{
                  const response =  await fetch(`${process.env.REACT_APP_API_USER}/register`, {
                                   method: 'POST',
                                   body: JSON.stringify({
                                        first_name: values.first_name,
                                        last_name: values.last_name,
                                        email: values.email,
                                        pass: values.password,
                                   }),
                                   headers: {
                                        'Content-Type': 'application/json',
                                   },
                              })
                           const json = response.json();
                           console.log(json)
                         toast.configure()
                    const registerOK = () => {
                          toast.success('Your registration has been successfully registered')
                         }     
                         
                         registerOK()  
             }catch (error){
                    console.log(error)
             }
              
			// .then((response) => {
			// 	if (!response) {
			// 		throw Error(response.statusText);
			// 	}
                    // else{
                       
                    //   }
                      
                    			// })
			// .catch((error) => {
			// 	console.log('Looks like there was an error: \n', error);
			// });
               window.location.reload()
               window.location.href('/login')
        }, 
        validationSchema : validateRegisters,
        validateOnChange: false,
        validateOnBlur: true
       
   }