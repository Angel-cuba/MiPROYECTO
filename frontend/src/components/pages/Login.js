import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/login.css';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { AuthContext } from '../../lib/auth/auth.context';
import { NavLink } from '../../components/Navbar/NavbarElements';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	toast.configure();

	const setAuthContext = useContext(AuthContext);

	const [userEmail, setuserEmail] = useState('');
	const [userPassword, setuserPassword] = useState('');

	const history = useHistory();

	const login = (e, setAuth) => {
		e.preventDefault();
		if(!userEmail || !userPassword){
			const toastWarning = () => {
				toast.info('Something is missing', {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000
				})
			}
			toastWarning()
			
		}

		Axios.post(`${process.env.REACT_APP_API_USER}/login`, {
			email: userEmail,
			pass: userPassword,
		})
			.then((response) => {
				if (response.data.token) {
					const name = (response.data.userDB[0].first_name).toUpperCase()
					const toastFx = () => {
						toast.success('Hello ' + name + ' is good to see ya..!');
						// ${response.data.userDB[0].first_name}
					};
					localStorage.setItem('jwt', JSON.stringify(response.data.token));
					setAuth(response.data.token);
					toastFx();

					history.push('/EachUser');
					console.log(userEmail);
				}
			})
			.catch((error) => {
				const toastError = () => {
					toast.error(`${error.response.data}`)
				}
				console.log('Este es el error : ', error.response);
				if(error) toastError();
			});
	};

	return (
		<>
			<div className="login_page">
				<div className="login">
					<h1>Login Page</h1>
					<div className="email">
						<label>Username</label>
						<input
							type="text"
							id="email"
							placeholder="Email address"
							onChange={(e) => {
								setuserEmail(e.target.value);
							}}
							autoFocus
						/>
					</div>
					<div className="password">
						<label>Password</label>
						<input
							type="text"
							id="password"
							placeholder="Password"
							onChange={(e) => {
								setuserPassword(e.target.value);
							}}
							autoComplete="off"
						/>
					</div>

					<button
						className="btn_login"
						onClick={(e) => {
							login(e, setAuthContext.setAuth);
						}}
					>
						Login
					</button>
					<div className="register_side">
						<h3>Do you have an account?</h3>

						<NavLink to="/userRegister">Register here</NavLink>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Login;
