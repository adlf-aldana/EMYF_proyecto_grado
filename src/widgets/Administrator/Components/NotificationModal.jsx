import React, { Component } from 'react';
import { 
	ContainerModal,
	Title,
	ViewAll,
	ContainerListNotification,
	ItemNotification
} from './../@styles/NotificationModalStyles'

import {
	FontAwesomeIcon,
	faBullhorn,
	faBell,
	faHome,
	faClipboardList,
	faCampground,
	faAddressBook,
	faCog,
	faUserEdit
} from './../../../themes/icons';

import fire from './../../../config/firebase';

class NotificationModal extends Component{

	state = {
		listNotification:[],
		colors:[ "#626fbf", "#ff8241", "#636e72"],
		listOptions :[
			{
				name: "Inicio",
				icon: faHome,
				route: "home"
			},
			{
				name: "Generar planilla",
				icon: faClipboardList,
				route: "generatetemplate"
			},
			{
				name: "Requerimientos",
				icon: faCampground,
				route: "requirements"
			},
			{
				name: "Empleados",
				icon: faAddressBook,
				route: "employees"
			},
			{
				name: "Configuración",
				icon: faCog,
				route: "setting"
			},
			{
				name: "Notificaciones",
				icon: faBell,
				route: "notifications"
			},
			{
				name: "Mi perfil",
				icon: faUserEdit,
				route: "profile"
			}
		]
	}

	constructor(props){
		super(props);
		this.notificationsObserver=()=>{};
	}


	descriptionNotification=()=>{
		const { idEmployee } = JSON.parse(localStorage.session);
		this.notificationsObserver = fire.database.ref('employees').child( idEmployee ).child("notifications").orderByChild("viewed").equalTo(false).on("value",snapshot=>{
										try{
											const listNotification = Object.keys(snapshot.val()||{}).map(idNotification=>{
																		const { description, url} = snapshot.val()[idNotification];
																		return { description, url, idNotification };
																	});

											// console.log(listNotification);

											this.setState({
												listNotification
											});

										}catch(e){
											// console.log("xD3");											
										}

									});
	}
	componentWillUnmount() {
		this.notificationsObserver();
	}

	openNotification= ( loadDataOptions, url, activeModal ) =>{
		activeModal();
		const {name,icon,route} = this.state.listOptions.find(x=>x.route===url)||{name:"",icon:faBullhorn, route:"error"};
		loadDataOptions(name,icon,route);

	}

	componentDidMount(){
		this.descriptionNotification();	
	}


	render(){
		console.disableYellowBox = true;
		const { listNotification, colors } = this.state;
		let color = -1;
		return(
			<ContainerModal>
				<Title>Notificaciones nuevas { listNotification.length }</Title>
				<ContainerListNotification>
					{
						listNotification.map( ({ description, url, idNotification},index)=>{
							color++;
							if(color === colors.length) color = 0;				

							return(
								<ItemNotification onClick={()=>{

									this.openNotification( this.props.loadDataOptions, url, this.props.activeModal );
								
								}} key={idNotification} color = { colors[color] }>
								
									<FontAwesomeIcon icon={faBullhorn} /> &nbsp;
									{ description }
								
								</ItemNotification>
							)
						})
					}
				</ContainerListNotification>
		
				<ViewAll onClick={()=>{

					this.props.activeModal();
					this.props.loadDataOptions("Notificaciones",faBell,"notifications");
				
				}}>Ver todo</ViewAll>
		
			</ContainerModal>
		);
	}
}


export default NotificationModal;