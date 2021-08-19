import React from 'react';

import './css/newlink.css';

//Importing Formiks
import {  Formik, Form} from 'formik'
import Input from '../../Small-Components/Input'
import { FormikLink } from '../../lib/FormikLink';


export const NewLinks = () => {

	return (
		<>
			<div className="form">
				<Formik {...FormikLink}>
						
					{formik => (
							<div className="form_card">
								<h2>New Link</h2>
					<Form>

						<Input
							label="Title"
							name="title"
							placeholder="Title.."/>
						<Input
							label="Url"
							name="url"
							placeholder="Url..." />
						<Input 
							label="Description"
							name="description"
							placeholder="Description....." />
					
					<button type="submit" className="btn_add">
						Add new link
					</button> 
						
					</Form>
				</div>
					)
					}
					
				</Formik>
				
			</div>
		</>
	)
}

