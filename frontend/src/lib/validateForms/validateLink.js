import * as yup from 'yup'

export const validateLink = yup.object().shape({
     title : yup.string()
                    .min(4, 'Too short')
                    .required('This field is required'),
     url : yup.string()
                    .url('Must be a valid url')
                    .matches(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm, 'This address has some invalid characters')
                    .required('This field is required'),
     description : yup.string()
                    .min(10, 'Plzz, try to give somthing to show...')
                    .max(20, 'Upss, seems like is too much')
               
})

export const initialValuesLink = {
     title : '',
     url: '',
     description : ''
}