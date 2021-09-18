import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import { addDoc, collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore'

const Home = ({userObj}) => {
	const [ntweet, setNtweet] = useState("");
	const [ntweets, setNtweets] = useState([]);
	
	useEffect(() => {
		onSnapshot(query(collection(dbService, "ntweets"),orderBy("createdAt", "desc")), (snapshot) => {
			const ntweetArray = snapshot.docs.map(doc => ({
				id:doc.id,
				...doc.data(),
			}));
			setNtweets(ntweetArray);
		});
	}, []);

	const onSubmit = async (event) => {
		event.preventDefault();
		const docRef = await addDoc(collection(dbService, "ntweets"), {
			text: ntweet,
			createdAt: Date.now(),
			creatorId: userObj.uid,
		});
		setNtweet("");
	};
	
	const onChange = (event) => {
		const {
			target:{value}
		} = event; 
		setNtweet(value);
	};
	
	return (
	<div>
		<form onSubmit={onSubmit}>
			<input 
				type="text"
				placeholder="What's on your mind?"
				maxLength={120}
				value={ntweet}
				onChange={onChange}
				/>
			<input type="submit" value="tweet" />
		</form>
		<div>
			{ntweets.map((ntweet) => (
				<div key={ntweet.id}>
					<h4>{ntweet.text}</h4>
					<h6>{ntweet.createdAt}</h6>
					<h6>{ntweet.creatorId}</h6>
				</div>
			))}
		</div>
	</div>
	);
}
export default Home;