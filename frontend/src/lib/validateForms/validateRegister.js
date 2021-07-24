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
                    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'This email has some invalid characters')
                    .required('This field is required'),
     password: yup.string()
                    .min(6, 'Too short')
                    .max(20, 'Too long')
                    .required('This field is required'),
     confirmpassword: yup.string()
                    .oneOf([yup.ref('password'), null])
                    .required('This field is required')

})
// Validaciones para lso emails
//-->/^[aA-zZ\s]+$/
//-->/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

//--> /^(?:(?:(?:[a-zA-Z0-9!#$%&'*+/=?^_`{}|~-](?:[a-zA-Z0-9!#$%&'*+/=?^_`{}|~.-]*[a-zA-Z0-9!#$%&'*+/=?^_`{}|~-])?)|(?:(\")[a-zA-Z0-9\(\)<>\[\]:,;@\\\"!#$%&'*+/=?^_`{}| ~.-]{1,}\1))\@(?:(?:(?:[a-z0-9]+\.){1,2}[a-z]{2,10})|(?:[a-z0-9]+)))$/

export const initialValues = {
         first_name: '' ,
         last_name: '',
         email: '',
         password: '',
         confirmpassword: ''
}

   
