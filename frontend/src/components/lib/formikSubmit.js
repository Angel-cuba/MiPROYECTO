// import useHistory from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValues, validateRegisters } from '../lib/validateRegister'
// const history = useHistory()

export const formikSubmit = {  
   

        initialValues : initialValues,
       
        onSubmit: async (values) => {
               await fetch('http://localhost:4000/api/user/register', {
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
				// history.push('/login');
                    window.location.reload()
                    // alert('Your registration has been OK')
                    window.location.href('/login')
                    registerOK()
                    }
				
                    			})
			// .then((data) => console.log(data))
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
        validateOnChange: true,
        validateOnBlur: false
       
   }