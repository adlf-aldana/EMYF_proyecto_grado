import React, { useState } from 'react';
import { 
	ContainerButtonsLogin,
} from './../@styles/ButtonsLoginStyles';

import {
	OptionsLogin
} from './OptionsLogin';
import {
	EmailLogin
} from './EmailLogin';

export const ButtonsLogin = () => {
	const [ openEmail, setOpenEmail ] = useState( false );

	return (
		<ContainerButtonsLogin>
			{
				!openEmail?(<OptionsLogin setOpenEmail={ setOpenEmail }/>):( <EmailLogin setOpenEmail={ setOpenEmail }/> )
			}
		</ContainerButtonsLogin>
	);
}