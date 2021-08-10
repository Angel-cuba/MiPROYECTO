import React, { useState } from 'react';

import './css/newlink.css';

//Importing Formiks
import {  Formik, Form} from 'formik'
import Input from '../../Small-Components/Input'
import { FormikLink } from '../../lib/FormikLink';


const NewLinks = () => {
	// const [title, setTitle] = useState('');
	// const [url, setUrl] = useState('');
	// const [description, setDescription] = useState('');

	// const history = useHistory();

	// const NewLink = async (e) => {
	// 	e.preventDefault();
	// 	const newLink = { title, url, description };
	// 	try {
	// 		const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add`, {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 			body: JSON.stringify(newLink),
	// 		});
	// 		const json = await response.json();
	// 		console.log(json);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// 	history.push('/eachUser');
	// 	window.location.reload();
	// };

	return (
		<>
			<div className="form">
				<Formik {...FormikLink}>
					{formik => (
							<div className="form_card">
								<h2>New Link</h2>
					<Form>
{/* 							
					<div className="title">
						<label>Title</label> */}
						{/* <input
							type="text"
							id="title"
							placeholder="Title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/> */}
					<Input
							label="Title"
							name="title"
							placeholder="Title"/>
					<Input
						label="Url"
							
							name="url"
							placeholder="Url" />
					<Input 
						label="Description"
						name="placeholder"
						placeholder="Description....."
							/>
					{/* </div> */}

					{/* <div className="url">
						<label>Url</label>
						<input
							type="text"
							id="url"
							placeholder="Url"
							onChange={(e) => {
								setUrl(e.target.value);
							}}
						/>
					</div> */}
					{/* <div className="description">
						<label>Description</label>
						<input
							type="text"
							id="description"
							placeholder="Description"
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>
					</div> */}
					<button type="submit" className="btn_add">
						 {/* onClick={NewLink} */}
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

export default NewLinks