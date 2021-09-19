import React, { useState } from 'react';
import { authService } from 'fbase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

const AuthForm = () => {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [newAccount, setNewAccount] = useState(true);
	const [error, setError] = useState("");
	const onChange = (event) => {
		const {target: {name, value}} = event;
		if(name === "email"){
			setEmail(value);
		} else if (name === "password"){
			setPassword(value);
		}
	}
	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			if(newAccount){
				// create account
				await createUserWithEmailAndPassword(authService, email, password);
			} else {
				// log in
				await signInWithEmailAndPassword(authService, email, password);
			}
			
		} catch (error){
			setError(error.message);
		}
	}
	
	const toggleAccount = () => setNewAccount((prev) => !prev);
	
	return (
	<>
		<form className="loginForm" onSubmit={onSubmit}>
			<input 
				name="email" 
				type="text" 
				placeholder="Email" 
				required 
				value={email} 
				onChange={onChange}
				className="loginText"
			/>
			<input 
				name="password" 
				type="password" 
				placeholder="Password" 
				required 
				value={password} 
				onChange={onChange}
				className="loginText"
			/>
			<input className="loginText loginBtn" type="submit" value={newAccount ? "Create Account" : "Log In" }/>
			<span className="errorMessage">{error}</span>
		</form>
			<span className="toggle" onClick={toggleAccount}> {newAccount ? "Log In" : "Create Account"}</span>
	</>
	)
}

export default AuthForm;