import React from 'react';
import { authService } from 'fbase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

export default () => {
	const history = useHistory();
	const onLogOutClick = () => {
		
		signOut(authService);
		history.push('/');
	}
	return (
		<>
		<button onClick={onLogOutClick}>Log Out</button>
		</>
	);
};