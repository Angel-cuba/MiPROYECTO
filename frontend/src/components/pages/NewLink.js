import React, {useState} from 'react';
import { useHistory } from 'react-router';
import Axios from 'axios'

import './css/newlink.css';

//Importing Formiks
import {  Formik, Form} from 'formik'
import Input from '../../Small-Components/Input'
import { FormikLink } from '../../lib/FormikLink';

export const NewLinks = () => {

const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
     const [description, setDescription] = useState('');

	const history = useHistory();

	const NewLink = async (e) => {
		e.preventDefault();
		userAuth()
		const newLink = { title, url, description };
		
			 try {
				const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/add`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newLink),
			});
			const json = await response.json();
			console.log(json);
			
			
		} catch (error) {
			console.log(error);
		}
		history.push('/eachUser');
		window.location.reload();
	};
	return(
			<>
						
					<div className="title">
						<label>Title</label> 
						 <input
							type="text"
							id="title"
							placeholder="Title"
							onChange={(e) => {
								setTitle(e.target.value);
							}}
						/>
					</div>
               <div className="url">
						<label>Url</label>
						<input
							type="text"
							id="url"
							placeholder="Url"
							onChange={(e) => {
								setUrl(e.target.value);
							}}
						/>
					</div>
          <div className="description">
						<label>Description</label>
						<input
							type="text"
							id="description"
							placeholder="Description"
							onChange={(e) => {
								setDescription(e.target.value);
							}}
						/>
					</div>
                         <button className="btn_add" onClick={NewLink}>Sending</button>
			</>
	)
			
}	
	const userAuth = () => {
  Axios.get(`${process.env.REACT_APP_API_USER}/add`,{
    headers: {
      "Content-Type" : "application/json",
      "access-token": localStorage.getItem("jwt")
    }
  }).then( response => console.log(response.data))
    .catch( error => console.log(error))

}

               
// export const NewLinks = () => {

// 	return (
// 		<>
// 			<div className="form">
// 				<Formik {...FormikLink}>
						
// 					{formik => (
// 							<div className="form_card">
// 								<h2>New Link</h2>
// 					<Form>

// 						<Input
// 							label="Title"
// 							name="title"
// 							placeholder="Title.."/>
// 						<Input
// 							label="Url"
// 							name="url"
// 							placeholder="Url..." />
// 						<Input 
// 							label="Description"
// 							name="description"
// 							placeholder="Description....." />
					
// 					<button type="submit" className="btn_add">
// 						Add new link
// 					</button> 
						
// 					</Form>
// 				</div>
// 					)
// 					}
					
// 				</Formik>
				
// 			</div>
// 		</>
// 	)
// }

