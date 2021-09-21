import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Navigation = ({ userObj }) => <nav style={{
		marginTop: "100px",
	}}
>
	<ul>
		<li>
			<Link 
				to='/'
				style={{
					marginLeft: 10,
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
				&nbsp;
				</span>	
			</Link>
		</li>
		<li>
			<Link 
				to='/profile'
				style={{
					marginLeft: 10,
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