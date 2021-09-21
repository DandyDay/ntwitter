import React, { useState } from 'react';
import { dbService, storageService } from 'fbase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

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
	
	const createdAtToString = (createdAt) => {
		var dateVar = new Date(createdAt);
		return (dateVar.getFullYear() + ". " + (dateVar.getMonth()+1) + ". " + dateVar.getDate() + ". " + (dateVar.getHours()<10 ? "0" + dateVar.getHours() : dateVar.getHours()) + ":" + (dateVar.getMinutes()<10 ? "0" + dateVar.getMinutes() : dateVar.getMinutes()));
	}
	
	return (
	<div className="ntweet">
		{editing ? (
				<>
				<form className="editNtweetForm" onSubmit={onSubmit}>
					<input
						className="editText"
						value={newNtweet}
						type="text"
						placeholder="Edit your ntweet"
						onChange={onChange}
						required />
					<input className="editUpdate" type="submit" value="Update Ntweet" /> 
				</form>
				<button className="editCancel" onClick={toggleEditing}>Cancel</button>
				</>
			) : (
				<>
					<span className="ntweetContent">{ntweetObj.text}</span>
				{ntweetObj.photoUrl && (
				 <img src={ntweetObj.photoUrl} alt={ntweetObj.id} className="ntweetPhoto" />
				 )}
					<span className="createAt">{createdAtToString(ntweetObj.createdAt)}</span>
					<span className="creatorName">by {ntweetObj.creatorName}</span>
					{isOwner && (
					<div className="ntweetBtns">
						<button className="deleteBtn" onClick={onDeleteClick}>
							<FontAwesomeIcon icon={faTrash}/>
						</button>
						<button className="editBtn" onClick={toggleEditing}>
							<FontAwesomeIcon icon={faEdit}/>
						</button>
					</div>
					)}
				</>
			)
		}
	</div>
	);
}

export default Ntweet;