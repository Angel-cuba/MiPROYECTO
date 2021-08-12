import * as yup from 'yup'

export const validateImage = yup.object().shape({
     title: yup.string()
                   .min(5, 'Title must  be at least 5 characters or more...')
                   .required('This field is required'),
     image: yup.string()
                    .matches(/(\.jpg|\.jpeg|\.png|\.gif)$/i, "This file has invalids ending characters")
                    .required('This field is required'),
     description: yup.string()
                             .required('This field is required')
})

export const initialValuesImage = {
          title: '',
          image: '',
          description: ''
}