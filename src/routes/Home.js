import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Ntweet from 'components/Ntweet';
import NtweetFactory from 'components/NtweetFactory';

const Home = ({userObj}) => {
	
	const [ntweets, setNtweets] = useState([]);
	
	useEffect(() => {
		const getData = onSnapshot(query(collection(dbService, "ntweets"),orderBy("createdAt", "desc")), (snapshot) => {
			const ntweetArray = snapshot.docs.map(doc => ({
				id:doc.id,
				...doc.data(),
			}));
			setNtweets(ntweetArray);
		});
		return () => getData();
	}, []);	
			
	return (
	<div style={{
				marginBottom: "100px",
			}}>
		<NtweetFactory userObj={userObj} />
		<div className="ntweets_container">
			{ntweets.map((ntweet) => (
				<Ntweet key={ntweet.id} ntweetObj={ntweet} isOwner={ntweet.creatorId===userObj.uid} />
			))}
		</div>
	</div>
	);
}
export default Home;