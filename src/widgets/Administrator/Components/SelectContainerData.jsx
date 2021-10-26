import React , { Component } from 'react';

import Profile from './../../../views/Profile';
import Requirements from './../../../views/Requirements';
import Setting from './../../../views/Setting';

import Planilla from './../../../views/Planilla';
import RequerimentsPersonal from './../../../views/RequerimentsPersonal/';
import Inventory from './../../../views/Inventory/';
import Employees from './../../../views/Employees/';
import Control from './../../../views/Control/';
import Reception from './../../../views/Reception/';
import Providers from './../../../views/Providers/';
import Registration from './../../../views/Registration/';
import EnableEmployees from './../../../views/EnableEmployees/';

class SelectContainerData extends Component{
	render(){
		const { route } = this.props;
		let componentRoute = null;
		switch(route){
			case "home": componentRoute=(<h1>Hola home</h1>);break;
			case "profile": componentRoute=(<Profile recoveryData={this.props.recoveryData}/>);break;
			case "requirimentsPersonal": componentRoute=(<RequerimentsPersonal/>); break;
			case "employees": componentRoute=(<Employees/>);break;
			case "setting": componentRoute=(<Setting/>);break;
			case "generatetemplate": componentRoute=(<Planilla/>);break;
			case "requirements": componentRoute=(<Requirements/>);break;
			case "inventory": componentRoute=(<Inventory/>);break;
			case "control": componentRoute=(<Control/>);break;
			case "reception": componentRoute=(<Reception/>);break;
			case "vendors": componentRoute=(<Providers/>);break;
			case "registration": componentRoute=(<Registration/>);break;
			case "enableEmployees": componentRoute=(<EnableEmployees/>);break;
			default: componentRoute=(<h1>xD</h1>);
		}
		return componentRoute;
		
	}
};



export default SelectContainerData;