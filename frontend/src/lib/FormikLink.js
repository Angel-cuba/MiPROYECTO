import { validateLink, initialValuesLink } from './validateForms/validateLink'
import Axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { array } from '../Small-Components/Swal'
const MySwal = withReactContent(Swal);




//Using SweetAlert2
// import Swal from 'sweetalert2'




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
		
		MySwal.fire({
			title: array.title,
			footer: array.footer,
			background:  array.background,
			icon: array.icon,
			timer: array.timer,
			timerProgressBar: array.timerProgressBar

})
.then(() => {		
  return MySwal.fire({
	  				title: array.segundo_title,
					timer: array.segundo_timer
					  })
           			.then(()=> setTimeout(()=> window.location.reload()))
})
			
		} catch (error) {
			console.log(error);
		}
          window.location.href('/eachUser')

     },
     validationSchema : validateLink,
        validateOnChange: false,
        validateOnBlur: true
}
