import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';

const Ntweet = ({ntweetObj, isOwner}) => {
	const [editing, setEditing] = useState(false);
	const [newNtweet, setNewNtweet] = useState(ntweetObj.text);
	const onDeleteClick = () => {
		const ok = window.confirm("Delete?");
		if(ok){
			//delete
			deleteDoc(doc(dbService, `ntweets/${ntweetObj.id}`));
			if(ntweetObj.photoUrl !== ""){
				deleteObject(ref(storageService, ntweetObj.photoUrl));
			}
		}
	}
	
	const toggleEditing = () => setEditing((prev) => !prev);
	
	const onSubmit = (event) => {
		event.preventDefault();
		updateDoc(doc(dbService, `ntweets/${ntweetObj.id}`), "text", newNtweet);
		setEditing(false);
	}
	
	const onChange = (event) => {
		const {target:{value}} = event;
		setNewNtweet(value);
	}
	
	return (
	<div className="ntweet">
		{editing ? (
				<>
				<form onSubmit={onSubmit}>
					<input
						value={newNtweet}
						type="text"
						placeholder="Edit your ntweet"
						onChange={onChange}
						required />
					<input type="submit" value="Update Ntweet" />
				</form>
				<button onClick={toggleEditing}>Cancel</button>
				</>
			) : (
				<>
					<h4>{ntweetObj.text}</h4>
				{ntweetObj.photoUrl && (
				 <img src={ntweetObj.photoUrl} alt={ntweetObj.id} width="100px" height="100px" />
				 )}
					<h6>{ntweetObj.createdAt}</h6>
					<h6>{ntweetObj.creatorId}</h6>
					{isOwner && (
					<>
						<button onClick={onDeleteClick}>Delete Ntweet</button>
						<button onClick={toggleEditing}>Edit Ntweet</button>
					</>
					)}
				</>
			)
		}
	</div>
	);
}

export default Ntweet;