import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ViewEmployees from './Components/employees.jsx';



class Employees extends Component{

	

	render(){
		

		return(
			<ViewEmployees></ViewEmployees>
			
		);
	}
}
export default withRouter(Employees);