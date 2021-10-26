import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';



import Reportes from './Components/ReportInventory';



class ReportsInventory extends Component{
	render() {

		return(

			<Reportes></Reportes>
			
		);
	}
}

export default withRouter( ReportsInventory );