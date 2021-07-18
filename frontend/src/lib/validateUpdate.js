import * as yup from 'yup'

export const validateUpdate = yup.object().shape({
     title : yup.string()
               .min(5, 'Too short')
               .max(20, 'Too long')
               .required('This field is required'),
     url : yup.string()
               .url('Must be a valid url')
               .required('This field is required'), 
     description : yup.string()
               .min(4, 'Too short')
               .required('This field is required')
               
})

export const initialValues = {
     title: '',
     url: '',
     description: ''
}