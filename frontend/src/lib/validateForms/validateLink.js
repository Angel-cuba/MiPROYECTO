import * as yup from 'yup'

export const validateLink = yup.object().shape({
     title : yup.string()
                    .min(4, 'Too short')
                    .required('This field is required'),
     url : yup.string()
                    .url('Must be a valid url')
                    .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm, 'This address has some invalid characters')
                    .required('This field is required'),
     description : yup.string()
                    .min(10, 'Plzz, try to give something to show...')
                    .max(30, 'Upss, seems like is too much')
                    .required('This field is required')
               
})
.required('This field is required')
export const initialValuesLink = {
     title : '',
     url: '',
     description : ''
}