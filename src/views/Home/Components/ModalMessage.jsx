import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

import { 
	ContainerModalMessage,
	ModalMessageData,
	Header,
	ButtonClose,
	ImageProfile,
	EmailText,
	Message,
	IconFace,
	ContainerOptions,
	ButtonModal
} from './../@styles/ModalMessageStyles';

import {
	FontAwesomeIcon,
	faSignOutAlt,
	faFrown,
	faSmileBeam,
	faChevronCircleRight,
	faTimes
} from './../../../themes/icons';

import { signOutGoogle } from './../../../Events/LoginEvents';

class ModalMessage extends Component{

	continue = ( { history, ModalMessageClose, dataUser } ) =>{
		if(dataUser.state){

			history.replace('/administrator/home',{ dataUser });

		}else{
			signOutGoogle( status =>{
				ModalMessageClose();
			});
		}
	}

	render(){
		const { ModalMessageClose, dataUser, history } = this.props;

		return(
			<ContainerModalMessage>
				<ModalMessageData>
					<Header>
						<ButtonClose onClick = { ()=>{
							signOutGoogle( status =>{
								ModalMessageClose();
							});
						}}>
							<span>
								<FontAwesomeIcon icon = { faSignOutAlt } />
							</span>
						</ButtonClose>
					</Header>

					<ImageProfile imageProfileUser = { dataUser.photoURL || "" } />
					<EmailText>
						{ dataUser.email || "" } <br/>
						<span>
							{ dataUser.displayName || "" }.
						</span>
					</EmailText>
					<Message>
						<IconFace active = { dataUser.state }>
							<FontAwesomeIcon icon = { dataUser.state ? faSmileBeam : faFrown } />	
						</IconFace>
						{
							dataUser.state ? (<p>Genial tu cuenta se encuentra activa.</p>) : (<p>Cuenta no autorizada.<br/>Por favor comunicate con RR.HH.</p>)
						}
					</Message>
					<ContainerOptions>
						<ButtonModal onClick = { () =>{	this.continue({ history, ModalMessageClose, dataUser });	}} active={ dataUser.state }>
							{dataUser.state ? "Continuar" : "Atras"}
							<FontAwesomeIcon icon={ dataUser.state ? faChevronCircleRight : faTimes }/>
						</ButtonModal>
					</ContainerOptions>
					
				</ModalMessageData>
			</ContainerModalMessage>
		);
	}
}


export default withRouter(ModalMessage);