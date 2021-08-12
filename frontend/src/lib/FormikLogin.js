import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValuesLogin, validateLogin } from './validateForms/validateLogin';

export const formikLogin = {
     initialValues: initialValuesLogin,

     onSubmit:  (values) => {

      },
      validationSchema: validateLogin,
      validateOnChange: false,
      validateOnBlur: true
}