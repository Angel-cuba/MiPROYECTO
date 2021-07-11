import React from 'react';
import { useHistory } from 'react-router-dom';
import './css/login.css';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { AuthContext } from '../lib/auth.context';
import { NavLink } from '../../components/Navbar/NavbarElements';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	toast.configure();

	const setAuthContext = useContext(AuthContext);

	const [userEmail, setuserEmail] = useState('');
	const [userPassword, setuserPassword] = useState('');
	//  const [ error, setError] = useState()

	const history = useHistory();

	const login = (e, setAuth) => {
		e.preventDefault();

		Axios.post('http://localhost:4000/api/user/login', {
			email: userEmail,
			pass: userPassword,
		})
			.then((response) => {
				if (response.data.token) {
					// console.log('test', response)
					const toastFx = () => {
						toast.success(`Hello  ${response.data.userDB[0].first_name} is good to see ya `);
					};
					localStorage.setItem('jwt', JSON.stringify(response.data.token));
					setAuth(response.data.token);
					toastFx();

					history.push('/EachUser');
				}
			})
			.catch((error) => {
				//  setError(error)
				console.log('este es el error : ', error);
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
