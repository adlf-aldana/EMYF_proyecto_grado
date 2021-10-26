import React, { Fragment, Component } from 'react';
import { 
	ContainerHeader,
	Section,
	ContinerNotifications,
	Photo,
	ContainerPhoto,
	ContainerInformation,
	Information,
	ButtonMenu,
	ContainerButtonMenu,
	ContainerMenuMobile,
	ContainerMenu,
	CloseMenu,
	ButtonEdit
} from './../@styles/HeaderStyles';

import Notifications from './Notifications';

import { 
	FontAwesomeIcon, 
	faExclamationTriangle, 
	faBars,
	faTimes,
	faUserEdit
} from './../../../themes/icons';

import { withRouter } from 'react-router-dom';

import Menu from './Menu';

class Header extends Component{

	state = {
		openMenu: false,
		history: this.props.history,
		optionSelected: this.props.dataUser.optionSelected
	}

	loadDataOptions = ( name, icon, route ) =>{
		this.state.history.push(`/administrator/${route}`);
		this.state.optionSelected({ name,icon,route });
	}


	render(){
		const { 
			//email,
			displayName,
			lastName,
			photoURL,
			//uid,
			name,
			nameAccessLevel,
			icon,
			optionSelected
		} = this.props.dataUser;

		const { openMenu } = this.state;
		return (
			<Fragment>

				<ContainerMenuMobile openMenu={openMenu}>
					<ContainerMenu>
						<Menu optionSelected={ optionSelected }/>
						<CloseMenu onClick={()=>{
							this.setState({openMenu:!openMenu});
						}}>
							<FontAwesomeIcon icon={faTimes}/>
						</CloseMenu>
					</ContainerMenu>
					<div onClick={()=>{
							this.setState({openMenu:!openMenu});
						}}/>
				</ContainerMenuMobile>
				

				<ContainerHeader>
					<ContainerButtonMenu>
						<ButtonMenu onClick={()=>{
							this.setState({openMenu:!openMenu});
						}}>
							<FontAwesomeIcon icon={ faBars }/>
						</ButtonMenu>
					</ContainerButtonMenu>
					<Section>
						<FontAwesomeIcon icon={ icon || faExclamationTriangle }/> &nbsp;
						{ name || "Error 404" }
					</Section>

					<ContinerNotifications>
						<Notifications loadDataOptions={this.loadDataOptions}/>
					</ContinerNotifications>

					<ContainerPhoto>
						<Photo image={photoURL}/>				
					</ContainerPhoto>

					<ContainerInformation>
						<Information>
							{ displayName }&nbsp;{ lastName } <br/>
							{nameAccessLevel} <br/>
							
							<ButtonEdit onClick={()=>{
								this.loadDataOptions("Mi perfil", faUserEdit ,"profile");
							}}>
								<FontAwesomeIcon icon={ faUserEdit }/>
								<p>Editar perfil</p>
							</ButtonEdit>
						
						</Information>
					</ContainerInformation>

				</ContainerHeader>
			</Fragment>
		);
	}

};


export default withRouter(Header);