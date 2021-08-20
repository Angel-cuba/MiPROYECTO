import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Using SweetAlert2
import Swal from 'sweetalert2'


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
			// if(response){
			// 	Swal.fire({
			// 	title: 'Succefully!',
			// 	text: 'Your link went to DB now!',
			// 	icon: 'success',

			// 	showClass: {
			// 	popup: 'animate__animated animate__fadeInDown'
			// 	},
			// 	hideClass: {
			// 	popup: 'animate__animated animate__fadeOutUp'
			// 	}
			// })
			// }
			const json = await response.json();
			console.log(json);
			//  toast.configure()
			//  toast.success('Your comment has been added.')
			
		} catch (error) {
			console.log(error);
		}
          
		// history.push('/eachUser');
			
		setTimeout( Swal.fire({
				title: 'Succefully!',
				text: 'Your link went to DB now!',
				timer: 3000,
				icon: 'success',
				
				timerProgressBar: true,
				showClass: {
				popup: 'animate__animated animate__fadeInDown'
				},
				hideClass: {
				popup: 'animate__animated animate__fadeOutUp'
				}
			}),4000 )
		window.location.reload();
          window.location.href('/eachUser')

     },
     validationSchema : validateLink,
        validateOnChange: false,
        validateOnBlur: true
}