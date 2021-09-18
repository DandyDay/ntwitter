import React, { useState, useEffect } from 'react';
import { dbService, authService } from 'fbase';
import { signOut } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { collection, getDocs, where, orderBy, query } from 'firebase/firestore';
import Ntweet from 'components/Ntweet';

export default ({ userObj }) => {
	const history = useHistory();
	const onLogOutClick = () => {
		
		signOut(authService);
		history.push('/');
	};
	
	const getMyNtweets = async() => {
		const ntweets = await getDocs(query(collection(dbService, "ntweets"),orderBy("createdAt", "desc"),where("creatorId", "==", userObj.uid)));
		ntweets.docs.map(doc => (
			<Ntweet {...doc} />
		));
	}
	
	useEffect(() => {
		getMyNtweets();
	})
	
	return (
		<>
		<button onClick={onLogOutClick}>Log Out</button>
		</>
	);
};