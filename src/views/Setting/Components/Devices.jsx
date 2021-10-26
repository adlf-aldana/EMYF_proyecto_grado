import React, {Component, Fragment} from 'react';

import moment from 'moment';


import { 
	Container,
	SeccionName,
	ContainerCode,
	CodeInput,
	ButtonConfirm,
	DeviceVerifyContainer,
	Message
} from './../@styles/DevicesStyles';

import Item from './../Components/Item';

import fire from './../../../config/firebase';

import { sendCode } from './../../../apiRest/requests';

import {FontAwesomeIcon, faCheck} from './../../../themes/icons';


import swal from 'sweetalert';




class Devices extends Component{
	state={
		listDevices:[],
		myDevice: JSON.parse(localStorage.session).token,
		verify:{},
		stateVerify: JSON.parse(sessionStorage.verify||"{}").state?JSON.parse(sessionStorage.verify||"{}").state:false,

		timeRemaining:{
			hours:0,
			minutes:0,
			seconds:0
		},

		// toastManager: this.props.toastManager

	}
	constructor(props){
		super(props);
		this.intervalChronometer=null;
		this.code = React.createRef();


		this.devicesObserver=()=>{};
		this.verificationObserver=()=>{};
	}

	recoveryData=()=>{
		const {idEmployee} = JSON.parse(localStorage.session);

		this.devicesObserver = fire.database.ref("employees").child( idEmployee ).child("devices").on("value",snapshot=>{
			try{
				this.setState({
					listDevices:snapshot.val()||{}
				})
			}catch(e){
				// console.log("xd");
			}
		});
	}


	verification=()=>{
		const {idEmployee} = JSON.parse(localStorage.session);

		this.verificationObserver = fire.database.ref("employees").child( idEmployee ).child("verification").on("value",snapshot=>{
			try{
				this.setState({
					verify:snapshot.val()||{}
				})

				// -------
				if(this.state.verify.validate){
					this.timeServer((timeServer)=>{
						
							
						if(this.intervalChronometer!==null){
							clearInterval(this.intervalChronometer);
						}

						this.chronometer(timeServer,this.state.verify.validate);


					});
				}
			}catch(e){
				// console.log("xD2");
			}
			// ----
		});
	}



	closeSessionHandler =(id,name)=>{
		const { stateVerify, timeRemaining }= this.state;
		const {idEmployee} = JSON.parse(localStorage.session);

		if(stateVerify){
		
			fire.database.ref("employees").child( idEmployee ).child("devices").child(id).remove();
			swal("Operacion exitosa", "Se cerro la sesion del dispositivo "+name, "success");
		
		}else if(timeRemaining.minutes<=10){
			const {email,idEmployee,displayName} = JSON.parse(localStorage.session);
			sendCode({
				id:idEmployee,
				name:displayName,
				mail:email,
			},(result)=>{
				swal("Dispositivo no verificado.", "Enviamos un codigo de verificacion al correo asociado a esta cuenta, este codigo es valido por 15 min.", "warning");
			})
		}else{
			swal("Codigo enviado.", "Por favor revisa tu email y sigue las instrucciones.", "warning");
		}
	}

	timeServer=(callback)=>{
		fire.database.ref("/.info/serverTimeOffset").once('value').then(offset=> {
   			 const offsetVal = offset.val() || 0;
   			 let serverTime = Date.now()+offsetVal;
   			 callback(serverTime);
   		});
	}


	chronometer=(timeServer,endTime)=>{
		
		const eventTime= endTime;
		const currentTime = timeServer;
		const diffTime = eventTime - currentTime;
		let duration = moment.duration(diffTime, 'milliseconds');
		const interval = 1000;

		this.intervalChronometer = setInterval(()=>{
			duration = moment.duration(duration - interval, 'milliseconds');
			if(duration.hours()<=0 && duration.minutes()<=0 && duration.seconds()<=0){
				 clearInterval(this.intervalChronometer);
			}
			if(this.state.stateVerify){
				clearInterval(this.intervalChronometer);
				this.setState({
					timeRemaining:{
						hours:0,
						minutes:0,
						seconds:0
					}
				})
			}

			this.setState({
				timeRemaining:{
					hours:duration.hours(),
					minutes:duration.minutes(),
					seconds:duration.seconds()
				}
			});


		}, interval);
	}


	  componentWillUnmount() {
	    
		this.devicesObserver();
		this.verificationObserver();
	  }

	compareCode =()=>{
		const { verify, stateVerify, timeRemaining } = this.state;
		let myCode = this.code.current.value;

		if(!stateVerify){
			if(myCode!==""){
							
				if(verify.code){
					const {minutes, seconds}=timeRemaining;
					const result= verify.code ===  parseInt(myCode)||0;

					if(minutes>0){

						if(result){
							this.setState({
								stateVerify:true
							});

							swal("Genial", "Este dispositivo fue verificado con exito.", "success");
							
							this.code.current.value="";

							sessionStorage.verify=JSON.stringify({
								state:true
							});

						}else{
							swal("codigo invalido", "Verifica que tu codigo este vigente.", "error");

						}

					}else if(seconds>0){

						if(result){
							this.setState({
								stateVerify:true
							});
							swal("Genial", "este dispositivo fue verificado con exito.", "success");

							this.code.current.value="";

							sessionStorage.verify=JSON.stringify({
								state:true
							});

						}else{
							swal("codigo invalido", "Verifica que tu codigo este vigente.", "error");
						}

					}else{
						swal("Alto", "No tienes codigos vigentes en tu cuenta.", "warning");
					}


				}else{
					swal("Alto", "No tienes codigos vigentes en tu cuenta.", "warning");

				}

			}else{
				swal("Codigo incorrecto", "Debes introducir el codigo que enviamos a tu correo.", "error");

			}			
		}else{
			swal("Genial", "Este dispositivo ya fue verificado con anterioridad.", "success");

		}
	}



	componentDidMount(){
		this.recoveryData();
		this.verification();
	}



	render(){
		const { listDevices, myDevice } = this.state;


		const message = (
			<DeviceVerifyContainer>
				<Message>Tu dispositivo esta verificado.</Message>
				<p>Ahora puedes cerrar cesion de los dispositivos que tu desees.</p>
			</DeviceVerifyContainer>
		);

		const codeInputSegment = (
			<ContainerCode>
				<CodeInput ref={this.code} type="number" placeholder="Introduce tu codigo"/>
				
				<ButtonConfirm onClick={()=>{
					this.compareCode();
				}}> 
					<FontAwesomeIcon icon={faCheck}/>
					&nbsp;
					Confirmar
				</ButtonConfirm>
			</ContainerCode>
		); 


		return(
			<Fragment>
				<Container>
					<SeccionName>Dispositivos conectados</SeccionName>
					{
						Object.keys(listDevices).map(key=>{
							let {name,token} = listDevices[key];
							return (
								<Item 
									isMyDevice={token===myDevice}
									key={key}
									closeSessionHandler={this.closeSessionHandler}
									data={{
										id:key,
										name:token===myDevice?`Dispositivo actual <br/> ${name}`:name
									}}/>
							);
						})
					}

					<SeccionName>Codigo de verification</SeccionName>

					{
						this.state.stateVerify?message:codeInputSegment
					}

					

				</Container>
			</Fragment>
		);
	}
}

export default Devices;