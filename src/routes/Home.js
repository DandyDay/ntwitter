import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from 'fbase';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import Ntweet from 'components/Ntweet';

const Home = ({userObj}) => {
	const [ntweet, setNtweet] = useState("");
	const [ntweets, setNtweets] = useState([]);
	const [photo, setPhoto] = useState("");
	
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
		let photoUrl = "";
		
		if(photo !== ""){
			const photoRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
			const response = await uploadString(photoRef, photo, "data_url");
			photoUrl = await getDownloadURL(response.ref);
		}
				
		const docRef = await addDoc(collection(dbService, "ntweets"), {
			text: ntweet,
			createdAt: Date.now(),
			creatorId: userObj.uid,
			photoUrl,
		});
		setNtweet("");
		setPhoto("");
	};
	
	const onChange = (event) => {
		const {
			target:{value}
		} = event; 
		setNtweet(value);
	};
	
	const onFileChange = (event) => {
		const {
			target: { files },
		} = event;
		const theFile = files[0];
		const reader = new FileReader();
		reader.onloadend = (finishedEvent) => {
			const {currentTarget: { result }} = finishedEvent;
			setPhoto(result);
		}
		reader.readAsDataURL(theFile);
	}
	
	const onClearClick = () => setPhoto("");
			
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
			<input type="file" accept="image/*" onChange={onFileChange} />
			<input type="submit" value="tweet" />
			{photo && (
				<div>
					<img src={photo} width="50px" height="50px" />
					<button onClick={onClearClick}>Clear</button>
				</div>
			)
			}
		</form>
		<div>
			{ntweets.map((ntweet) => (
				<Ntweet key={ntweet.id} ntweetObj={ntweet} isOwner={ntweet.creatorId===userObj.uid} />
			))}
		</div>
	</div>
	);
}
export default Home;