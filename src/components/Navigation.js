import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faComments } from "@fortawesome/free-solid-svg-icons";


const Navigation = ({ userObj }) => <nav style={{
		marginTop: "100px",
	}}
>
	<ul>
		<li>
			<Link 
				to='/myntweets'
				style={{
					
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					fontsize: 12,
				}}
			>
				<FontAwesomeIcon
				icon={faComments}
				color={"#04AAFF"}
				size="2x"
				/>
				<span className="profileText">
				My Tweets
				</span>
			</Link>
		</li>
		<li>
			<Link 
				to='/'
				style={{
					
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					fontsize: 12,
				}}
			>
				<FontAwesomeIcon
				icon={faTwitter}
				color={"#04AAFF"}
				size="2x"
				/>
				<span className="profileText">
				Home
				</span>	
			</Link>
		</li>
		<li>
			<Link 
				to='/profile'
				style={{
					
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					fontsize: 12,
				}}
			>
				<FontAwesomeIcon
				icon={faUser}
				color={"#04AAFF"}
				size="2x"
				/>
				<span className="profileText">
				{
					userObj?.displayName?.length ? 
					`${userObj.displayName}'s Profile` : 
					"Profile"
				}
				</span>
			</Link>
		</li>
	</ul>
</nav>;

export default Navigation;