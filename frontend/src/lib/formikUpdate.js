import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initialValues, validateUpdate } from '../lib/validateUpdate'

export const formikUpdate = {
     initialValues: initialValues,
     onSubmit: async (values, id) => {
          
          await fetch(`${process.env.REACT_APP_BACKEND_URL}/update/${id}`,
               {
                    method: 'PUT',
                    body: JSON.stringify({
                    title : values.title,
                    url: values.url,
                    description: values.description

                    }),
                    headers: {
                         'Content-Type': 'application/json'
                    }

               })
               .then(response => {
                    if(!response){
                         throw Error(response.statusText)
                    }
                    else{
                         response.json()
                          toast.configure()
                    const updateOK = () => {
                          toast.success('Your registration has been successfully registered')
                         }     
                         updateOK()
                    }
               })

          console.log(values)

     },
     validationSchema: validateUpdate,
     validateOnChange: true,
     validateOnBlur: false
     
}
