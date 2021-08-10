import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { validateLink, initialValuesLink } from './validateForms/validateLink'


export const FormikLink = {
     initialValues: initialValuesLink,

     onSubmit: async(values) => {
          	 try {
			 const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
                         title: values.title,
                         url: values.url,
                         description: values.description
                    }),
			});
			const json = await response.json();
			console.log(json);
		} catch (error) {
			console.log(error);
		}
          
		// history.push('/eachUser');
		window.location.reload();
          window.location.href('/eachUser')

     },
     validationSchema : validateLink,
        validateOnChange: false,
        validateOnBlur: true
}