import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValues, validateUpdate } from '../lib/validateUpdate'

export const formikUpdate = {
     initialValues: initialValues,
     onSubmit: (values) => {
          console.log(values)
     },
     validationSchema: validateUpdate,
     validateOnChange: true,
     validateOnBlur: false
     
}