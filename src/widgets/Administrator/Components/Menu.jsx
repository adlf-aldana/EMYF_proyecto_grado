import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { 
	MenuContainer,
	LogoMenu,
	ContainerOptions,
	ButtonOption,
	MenuTitle
} from './../@styles/MenuStyles';

import { 
	FontAwesomeIcon,
	faBars,
	faHome,
	faClipboardList,
	faCampground,
	faAddressBook,
	faCog,
	faSignOutAlt,
	faUserEdit,
	faBell,
	faWarehouse,
	faCheckCircle,
	faTruck,
	faPlusCircle,
	faListOl,
	faUserCheck
} from './../../../themes/icons';

import { signOutGoogle } from './../../../Events/LoginEvents'; 

//tetst
// import { 
// 	triggerPushNotification,
// 	unsuscribeNotification
// } from './../../../Events/registerServiceWorker';
//test


class Menu extends Component{

	state = {
		listOptions :[
			{
				name: "Inicio",
				icon: faHome,
				route: "home",
			},
			{
				name: "Generar planilla",
				icon: faClipboardList,
				route: "generatetemplate"
			},
			{
				name: "Requerimiento",
				icon: faCampground,
				route: "requirimentsPersonal"
			},
			{
				name: "Empleados",
				icon: faAddressBook,
				route: "employees"
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
			},
			{
				name: "Inventario",
				icon: faWarehouse,
				route: "inventory"
			},
			{
				name: "Requerimientos",
				icon: faCampground,
				route: "requirements"
			},
			{
				name: "Control",
				icon: faListOl,
				route: "control"
			},
			{
				name: "Recepción",
				icon: faCheckCircle,
				route: "reception"
			},
			{
				name: "Proveedores",
				icon: faTruck,
				route: "vendors"
			},
			{
				name: "Registrar",
				icon: faPlusCircle,
				route: "registration"
			},
			{
				name: "Habilitar empleados",
				icon: faUserCheck,
				route: "enableEmployees"
			},
			{
				name: "Configuración",
				icon: faCog,
				route: "setting"
			}
			
		],

		skipList:["notifications","profile"],

		history: this.props.history,
		options: this.props.match.params.options,
		optionSelected: this.props.optionSelected,
		activeOption: {}
	}

	static getDerivedStateFromProps(nextProps, prevState) {
	  if (nextProps.match.params.options !== prevState.options) {
	    return ({ 
	    	options: nextProps.match.params.options,
	    	history: nextProps.history 
	    })
	  }
	  return null
	}

	activeOptionHandler = () =>{
		const { listOptions } = this.state;

		listOptions.map(({ name, icon, route }, index)=>{
			const isActive = this.isActive( route );	
			
			if( isActive ){
				this.setState({
					activeOption: { name, icon, route }
				});
				this.state.optionSelected( { name, icon, route } );
			}

			return null;
		});

	
	}

	componentDidMount(){
		this.activeOptionHandler();
	}

	isActive = ( routeOption, data ) => {
		const result = this.state.options === routeOption ? true : false;
		return result;
	}

	loadDataOptions = ( history, route ) =>{
		history.push(`/administrator/${route}`);
	}

	buttonOptionHandler = ( name, icon, route ) => {

		this.loadDataOptions( this.state.history, route );

		this.setState({
			activeOption: { name, icon, route }
		});

		this.state.optionSelected( { name, icon, route } );
	}

	signOut = () =>{
		signOutGoogle(()=>{
			localStorage.removeItem("session");
			localStorage.removeItem("configLocal");
			sessionStorage.removeItem("verify");
			this.state.history.replace("/");
			document.title="E.M.Y.F";
		});
	}

	render(){
		const { listOptions, skipList } = this.state;
		return(
			<MenuContainer>
				<LogoMenu/>
				<ContainerOptions>
					
					<MenuTitle>
						<FontAwesomeIcon icon={ faBars }/>
						&nbsp;Menu
					</MenuTitle>

					{
						listOptions.map(dataList=>
								JSON.parse(localStorage.session).optionsAccess.trim().split(",").some(x=>x.trim()===dataList.route)?dataList:null
						).filter(Boolean).map(({ name, icon, route }, index)=>{
							const isActive = this.isActive( route );	

							const skipRoute = skipList.filter(x=>x === route);
							if(skipRoute.length === 0){
								return(
									<ButtonOption onClick = { ()=>{

										this.buttonOptionHandler(name, icon, route);

									} } key={ index } active = { isActive }>
										<span>
											<FontAwesomeIcon icon={ icon }/>
										</span>
										<p>
											{name}
										</p>
									</ButtonOption> 
								);	
							}else{
								return null;
							}
						})
					}





					{/*<ButtonOption onClick = { ()=>{
						triggerPushNotification().catch((error) => console.error(error));					
						console.log('test notification');
					} }>
						<span>
							<FontAwesomeIcon icon={ faSignOutAlt }/>
						</span>
						<p>
							Subscribe notifications
						</p>
					</ButtonOption> 

					<ButtonOption onClick = { ()=>{
						unsuscribeNotification((result)=>{
							console.log(result);
						});					
					} }>
						<span>
							<FontAwesomeIcon icon={ faSignOutAlt }/>
						</span>
						<p>
							unSubscribe notifications
						</p>
					</ButtonOption> */}





					<ButtonOption onClick = { ()=>{
						const confirmExit = window.confirm("Estas apunto de salir, presiona aceptar para confirmar.");
						if(confirmExit){
							this.signOut();
						}
					} }>
						<span>
							<FontAwesomeIcon icon={ faSignOutAlt }/>
						</span>
						<p>
							Salir
						</p>
					</ButtonOption> 

				</ContainerOptions>
			</MenuContainer>
		);
	}
}

export default withRouter( Menu );