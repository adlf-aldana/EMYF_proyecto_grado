import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// import { recoveryDataInfo } from './../../Events/LoginEvents';

import { faExclamationTriangle } from './../../themes/icons';

import { 
	ContainerAdministrator,
	ContainerHeader,
	ContainerData,
	BackgroundAdministrator,
	ContainerMenu,
	GradientBackground
} from './@styles/AdministratorStyles';

import Menu from './Components/Menu';
import Header from './Components/Header';

import SelectContainerData from './Components/SelectContainerData';

import { remoteCloseSession,signOutGoogle } from './../../Events/LoginEvents';


class Administrator extends Component{

	state = {
		dataUser:{
			email: "", 
			displayName: "", 
			photoURL: "", 
			uid: "",
		},
		optionSelectedData:{
			name: "",
			icon: faExclamationTriangle
		},
		loading: true,
		history: this.props.history,
		isSession: localStorage.session !== undefined?true:false
	}

	constructor(props){
		super(props);
		this.observerCloseSession=()=>{};
	}

	signOut = () =>{
		signOutGoogle(()=>{
			localStorage.removeItem("session");
			localStorage.removeItem("configLocal");
			this.state.history.replace("/");
			document.title="E.M.Y.F";
		});
	}

	optionSelected = ( data ) =>{
		this.setState({
			optionSelectedData:{
				...data
			}
		});
	}

	closeWindow=()=>{
		if(localStorage.session === undefined){
			window.location.replace("/");
		}
	}

	recoveryData = () =>{

		if(localStorage.session !== undefined){
			
			this.setState({
				dataUser: JSON.parse(localStorage.session),
				loading: false
			});			
		}
	}

	componentDidMount(){
		remoteCloseSession(this.signOut, (observerCloseSession)=>{
			this.observerCloseSession=observerCloseSession;
		});
		
		this.recoveryData();
	}


	componentWillUnmount() {
		this.observerCloseSession();
	}

	render(){
		console.disableYellowBox = true;
		
		const { dataUser, optionSelectedData } = this.state; 

		// console.log(isSession,"<--");
		document.getElementsByTagName('meta')["theme-color"].content="#f7c76d";

		return (

			<section>
				<BackgroundAdministrator>
					<GradientBackground/>
				</BackgroundAdministrator>

				<ContainerAdministrator>
					<ContainerMenu>
						<Menu optionSelected={ this.optionSelected }/>
					</ContainerMenu>
					
					<ContainerHeader>
						<Header dataUser={ {
							...dataUser,
							...optionSelectedData,
							optionSelected:this.optionSelected
						}} />
					</ContainerHeader>

					<ContainerData>
						<SelectContainerData recoveryData={this.recoveryData} route = { optionSelectedData.route }/>
					</ContainerData>
				
				</ContainerAdministrator>
			</section>
		);
	}
}

export default withRouter(Administrator);