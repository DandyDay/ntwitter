import React from 'react';
import { authService } from 'fbase';
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGoogle,
	faGithub,
} from "@fortawesome/free-brands-svg-icons"
import AuthForm from 'components/AuthForm';

const Auth = () => {
	
	const onSocialClick = async (event) => {
		const {
			target : {name},
		} = event;
		let provider;
		if(name === "google"){
			provider = new GoogleAuthProvider();
		} else if (name === "github"){
			provider = new GithubAuthProvider();
		}
		await signInWithPopup(authService, provider);
	}
	
	return (
	<div className="AuthBody">
			<FontAwesomeIcon
				icon={faTwitter}
				color={"#04AAFF"}
				size="3x"
				style={{marginBottom: 30}}
			/>
			<AuthForm />
		<div className="auth">
			<button className="socialButton" name ="google" onClick={onSocialClick}>Continue with Google <FontAwesomeIcon icon={faGoogle} /></button>
			<button className="socialButton" name ="github" onClick={onSocialClick}>Continue with Github <FontAwesomeIcon icon={faGithub} /></button>
		</div>
	</div>		
	)
}
export default Auth;