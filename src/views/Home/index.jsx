import React, { Component, Fragment } from 'react';

import { withRouter } from 'react-router-dom';


import { Title } from './Components/Title';
import { Review } from './Components/Review';
import { Copyright } from './Components/Copyright';
import { Logo } from './Components/Logo';

import { LoginTitle } from './Components/LoginTitle';
import { ButtonsLogin } from './Components/ButtonsLogin';
import ModalMessage from './Components/ModalMessage';

import { 
	ContainerBackground,
	ContainerHome,
	ContainerLogin,
	LogoApp
} from './@styles/HomeStyles';

// widgets
import { Loading } from './../../widgets/Loading'

// events
import { signInLoginState } from './../../Events/LoginEvents';

class Home extends Component{

	state = {
		isLoading: true,
		dataUser: {},
		state: false
	}

	constructor(props){
		super(props);
		this.observerAuthState=()=>{};
	}

	loadingStart = () => {
		this.setState({
			isLoading: true
		});
	}

	loadingStop = () => {
		this.setState({
			isLoading: false
		});
	}

	sessionExists = ( state, dataUser ) => {
		this.setState({
			sessionExists: true,
			dataUser,
			state
		});
	}

	ModalMessageClose = () =>{
		this.setState({
			sessionExists: false
		});
	}

	changeSignIn = () =>{
		signInLoginState( this.loadingStart ,( state, dataUser ) => {
			
			if( dataUser ){
				this.sessionExists( state, dataUser );
			}
			this.loadingStop();

		},observerAuthState=>{
			this.observerAuthState=observerAuthState;
		});
	}	

	componentDidMount(){
		console.disableYellowBox = true;
		this.changeSignIn();
	}

	componentWillUnmount() {
		this.observerAuthState();
	}

	render(){
		console.disableYellowBox = true;
		document.getElementsByTagName('meta')["theme-color"].content="#ffffff";

		
		return(
			<Fragment>

				{
					this.state.isLoading?(<Loading/>):null
				}
				{
					this.state.sessionExists?(<ModalMessage dataUser = { {...this.state.dataUser, state:this.state.state} } ModalMessageClose={ this.ModalMessageClose }/>):null
				}
				
				<ContainerBackground/>
				
				<ContainerHome>

					<Logo/>
					<Title/>
					<Review/>
					<Copyright/>
					

					<LoginTitle/>
					<ContainerLogin>
						<LogoApp/>
						<ButtonsLogin/>
					</ContainerLogin>


			    </ContainerHome>


			</Fragment>
			
		)
	}
};



export default withRouter(Home);