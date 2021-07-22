// import useHistory from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValues, validateRegisters } from './validateForms/validateRegister'
// const history = useHistory()

export const formikRegister = {  
   

        initialValues : initialValues,
       
        onSubmit: async (values) => {
               await fetch(`${process.env.REACT_APP_API_USER}/register`, {
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
			.then((response) => {
				if (!response) {
					throw Error(response.statusText);
				}
                    else{
                         response.json();
                         toast.configure()
                    const registerOK = () => {
                          toast.success('Your registration has been successfully registered')
                         }     
                         window.location.reload()
                         window.location.href('/login')
                         registerOK()
                      }
                    			})
			.catch((error) => {
				console.log('Looks like there was an error: \n', error);
			});
     
     
     
     
      const isValid = await validateRegisters.isValid( values) 
     const btn = document.getElementById('btn')
     btn.disabled = true
       if(isValid){
            console.log(isValid)
          //   btn.setAttribute('enable')

       }

        }, 
        validationSchema : validateRegisters,
        validateOnChange: false,
        validateOnBlur: true
       
   }