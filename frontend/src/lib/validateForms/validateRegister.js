import * as yup from 'yup'

export const validateRegisters = yup.object().shape({
     first_name: yup.string()
                    .min(4, 'More than 4 characters')
                    .max(20, 'Less than 20 characters')
                    .required('This field is required'),
     last_name: yup.string()
                    .min(4, 'Too short')
                    .max(20, 'Too long, plzz less that 20 characters')
                    .required('This field is required'),
     email: yup.string()
                    .email('Invalid email address, plzz check again')
                    .required('This field is required'),
     password: yup.string()
                    .min(6, 'Too short')
                    .max(20, 'Too long')
                    .required('This field is required'),
     confirmpassword: yup.string()
                    .oneOf([yup.ref('password'), null])
                    .required('This field is required')

})

export const initialValues = {
         first_name: '' ,
         last_name: '',
         email: '',
         password: '',
         confirmpassword: ''
}

   
