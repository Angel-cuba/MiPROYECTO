import * as yup from 'yup'

export const validateImage = yup.object().shape({
     title: yup.string(),
     image: yup.string()
})