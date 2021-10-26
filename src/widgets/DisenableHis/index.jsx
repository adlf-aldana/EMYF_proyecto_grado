import React, { Component } from "react";

import { withRouter } from 'react-router-dom';
import History from './Components/disenable';

class Disenable extends Component{
	render(){
		return(
				<History></History>
			);
	}
}
export default withRouter( Disenable );