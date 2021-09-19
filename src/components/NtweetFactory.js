import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storageService, dbService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage';


const NtweetFactory = ({ userObj }) => {
	
	const [ntweet, setNtweet] = useState("");
	const [photo, setPhoto] = useState("");
	
	const onSubmit = async (event) => {
		event.preventDefault();
		let photoUrl = "";
		
		if(photo !== ""){
			const photoRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
			const response = await uploadString(photoRef, photo, "data_url");
			photoUrl = await getDownloadURL(response.ref);
		}
				
		await addDoc(collection(dbService, "ntweets"), {
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
		<form className="factoryContainer" onSubmit={onSubmit}>
			<div className="factoryInputs">
				<input 
					type="text"
					placeholder="What's on your mind?"
					maxLength={120}
					value={ntweet}
					onChange={onChange}
					className="ntweetText"
				/>
				<input className="submitBtn" type="submit" value="→" />
			</div>
			<input type="file" accept="image/*" onChange={onFileChange} />
			
			{photo && (
				<div>
					<img src={photo} alt="uploadedPhoto" width="50px" height="50px" />
					<button onClick={onClearClick}>Clear</button>
				</div>
			)
			}
		</form>
	)
}
export default NtweetFactory;