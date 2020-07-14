import React, { useState } from 'react';
import './Auth.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Menu from '../Menu.js';

function Auth() {
	const [ user, setUser ] = useState('');
	const [ pwd, setPwd ] = useState('');
	const [ error, setError ] = useState(false);
	let location = useLocation();
	let history = useHistory();
	let action = location.pathname.split('/')[2] === 'signin';
	
	function handleInputUser(e) {
		setUser(e.target.value);
	}
	function handleInputPwd(e) {
		setPwd(e.target.value);
	}
	function handleClick() {
		let finalUser;
		if (user.length === 0 || pwd.length === 0) {
			setError(true);
			return;
		}
		for (let i = 0; i < user.length; ++i) {
			let code = user.toLowerCase().charCodeAt(i);
			if ( code < 48 || (code > 57 && code < 97) || code > 122) {
				setError(true);
				return;
			}
		}
		for (let i = 0; i < pwd.length; ++i) {
			let code = pwd.toLowerCase().charCodeAt(i);
			if ( code < 48 || (code > 57 && code < 97) || code > 122) {
				setError(true);
				return;
			}
		}
		if (user.length > 9) {
			finalUser = user.substring(0, 9);
		} else {
			finalUser = user;
		}
		localStorage.setItem('user', finalUser);
		history.replace('/home');
	}

	return(
		<div className='auth d-flex flex-column align-items-center justify-content-center'>
			<Menu />
			<form action="" className='d-flex flex-column align-items-center'>
				<h1>{action ? 'Sign In' : 'Sign Up'}</h1>
				<input type="text" placeholder='username' onChange={handleInputUser}/>
				<input type="password" placeholder='password' onChange={handleInputPwd}/>
				<p className={error ? 'error' : ''}>invalid character</p>
				<input type="submit" value={action ? 'sign in' : 'sign up'} onClick={handleClick}/>
			</form>
			{action ? <Link to='/auth/signup'>Don't have an account ?</Link> : <Link to='/auth/signin'>Already have an account ?</Link>}
		</div>
	)
}

export default Auth;