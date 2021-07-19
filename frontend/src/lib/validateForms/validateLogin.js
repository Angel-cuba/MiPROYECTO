import * as yup from 'yup'

export const validateLogin = yup.object().shape({
     email: yup.string()
                    .email('Invalid email address')
                    .required(),
     password: yup.string()
                    .required("Can't forget the password")

})
export const initialValuesLogin = {
     email: '',
     password: ''
}