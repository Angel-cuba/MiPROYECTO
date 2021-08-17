import React from 'react'
import './css/blog.css'

import { Formik, Form} from 'formik'
import Input from '../../Small-Components/Input'

export const ImgTest = () => {


     return (
          <>
          <div className="pages">
                    <Formik>
                         {formik => (
                              <div className="register">
                                        <h1>Formik testing</h1>
                                        {console.log(formik)}
                                        <Form>
                                             <Input label="Image" type="file" placeholder="Image" name="image"/>
                                             <Input label="Text" type="text" placeholder="Name of image" name="testo"/>
                                             <Input label="Description" type="text" placeholder="Description" name="description"/>
                                        </Form>
                              </div>
                         )}
                    </Formik>
          </div>
          </>
     )
}