import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import ViewUser from './Components/enable';

class EnableEmployees extends Component{
	render(){
		return(
				<ViewUser></ViewUser>
			);
	}
}
export default withRouter(EnableEmployees);