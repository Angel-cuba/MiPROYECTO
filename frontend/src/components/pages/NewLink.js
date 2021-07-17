import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './css/newlink.css';

export const NewLinks = () => {
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [description, setDescription] = useState('');

	const history = useHistory();

	const NewLink = async (e) => {
		e.preventDefault();
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

	return (
		<>
			<div className="form">
				<div className="form_card">
					<h2>New Link</h2>
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

					<button type="submit" className="btn_add" onClick={NewLink}>
						Add new link
					</button>
				</div>
			</div>
		</>
	);
};
