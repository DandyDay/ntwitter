import React, { useState } from 'react';
import { authService } from 'fbase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

const Profile =  ({ userObj, refreshUser }) => {
	const history = useHistory();
	const [newDisplayName, setNewDisplayName] = useState(userObj?.displayName?.length ? userObj.displayName : "");
	
	const onLogOutClick = () => {
		
		signOut(authService);
		history.push('/');
	};
	
	const onChange = (event) => {
		const {
			target: {value},
		} = event;
		setNewDisplayName(value);
	}
	
	const onSubmit = async(event) => {
		event.preventDefault();
		if(userObj.displayName !== newDisplayName){
			await updateProfile(userObj, {
				displayName:newDisplayName
			});
		}
		refreshUser();
	}
	
	return (
		<>
		<form className="modifyProfile" onSubmit={onSubmit}>
			<input 
				className="editProfile"
				type="text" 
				placeholder="Display Name"
				onChange={onChange}
				value={newDisplayName}
			/>
			<input className="updateProfile" type="submit" value="Update Profile" />
		</form>
		<button className="logOut" onClick={onLogOutClick}>Log Out</button>
		
		</>
	);
};

export default Profile;