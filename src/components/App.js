import React, { useState, useEffect } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'fbase';
import { onAuthStateChanged } from 'firebase/auth';
import 'css/style.css';
import 'css/auth.css';

function App() {
	const [init, setInit] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userObj, setUserObj] = useState(null);
	
	useEffect(() => {
		onAuthStateChanged(authService,(user)=>{
			if(user){
				setIsLoggedIn(true);
				setUserObj(user);
			} else {
				setIsLoggedIn(false);
			}
			setInit(true);
		})
	}, [])
	
	const refreshUser = () => {
		setUserObj({...authService.currentUser});
		setUserObj(authService.currentUser);
	}
	
	return (
		<>
			{ init ? (
			 <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} refreshUser={refreshUser} />
			 ) : "Initializing..."}
		</>
	); 
}

export default App;