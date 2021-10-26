import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import RegistrarEmpleado from './Components/registration';


class RegistrationEmployees extends Component{
	render() {

		return(

			<RegistrarEmpleado>
				
			</RegistrarEmpleado>
	);
	}
}

export default withRouter( RegistrationEmployees );