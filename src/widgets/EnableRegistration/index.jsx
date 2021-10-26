import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import Registrar from './Components/enableRegistration';

class EnableRegistration extends Component{
	render(){
		return(
				<Registrar></Registrar>
			);
	}
}
export default withRouter( EnableRegistration );