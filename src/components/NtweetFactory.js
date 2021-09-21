import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storageService, dbService } from 'fbase';
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage';


const NtweetFactory = ({ userObj }) => {
	const refPhoto = useRef();
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
			creatorName: userObj.displayName,
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
		try{
			reader.readAsDataURL(theFile);
		} catch (e) {
			
		}
	}
	
	const onClearClick = () => {
		setPhoto("");
		refPhoto.current.value = "";
	}
	
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
			<label className="photoUploadBtn" for="input-file">
  				Upload Photo
			</label>
			<input id="input-file" className="photoUploader" type="file" ref={refPhoto} accept="image/*" onChange={onFileChange} />
			
			{photo && (
				<div className="uploadPhotoContainer">
					<img src={photo} alt="uploadedPhoto" className="ntweetUploadPhoto" />
					<span className="photoClear" onClick={onClearClick}>Clear</span>
				</div>
			)
			}
		</form>
	)
}
export default NtweetFactory;