import React, { Fragment } from 'react';

import { 
	FontAwesomeIcon,
	faGoogle,
	faKey
} from './../../../themes/icons';

// events
import { 
	signInGoogle	
} from './../../../Events/LoginEvents';

import { 
	Button,
	LoginTitleText
} from './../@styles/OptionsLoginStyles';

export const OptionsLogin = ( {setOpenEmail} ) => (
	<Fragment>
		<LoginTitleText>
				Login
		</LoginTitleText>		
		<Button onClick = { ()=>{ 
			signInGoogle(); 
		}} colorIcon = "#e17055" >
		
			<p>Login Google</p>
			<span>
				<FontAwesomeIcon icon={ faGoogle }/>	
			</span>
		
		</Button>
		
		<Button onClick = { ()=>{
			setOpenEmail(true);
		} } colorIcon = "#ffbe14" >

			<p>User and Password</p>
			<span>
				<FontAwesomeIcon icon={ faKey }/>	
			</span>
		
		</Button>
	</Fragment>
);