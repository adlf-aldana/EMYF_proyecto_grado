import React , { Component, Fragment } from 'react';

import { 
	ContainerProfile,
	ContainerForm,
	ContainerData,
	InputData,
	ContainerTitle,
	TitleEdit,
	Position,
	ContainerPhoto,
	Photo,
	PhotoIcon,
	EmailProfile,
	ButtonSave,
	ContainerButton
} from './@styles/Profile';

import { 
	FontAwesomeIcon,
	faUserEdit,
	faCheck,
	faCamera,
	faSpinner
} from './../../themes/icons.jsx';

import { updateEmployee } from './../../apiRest/requests';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import swal from 'sweetalert';



class Profile extends Component{

	constructor(props){
		super(props);
		this.name = React.createRef();
		this.lastName = React.createRef();
		this.ci = React.createRef();

	}

	state = {
		enableButton: true,
		toastManager: this.props.toastManager
	}

	enableButton=(state)=>{
		this.setState({
			enableButton: state
		})
	}


	validateCi = (data) =>{
		const r=new RegExp(/^\d{5,10}((\s|[-])\d{1}[A-Z]{1})?$/);
		return r.test(data);
	}



	updateHandler = ({idEmployee})=>{
		

		this.enableButton(false);

		const inputData = [
			this.name.current.value,
			this.lastName.current.value,
			this.ci.current.value
		].some(x=>x==="");


		if(!inputData){

			if(this.validateCi(this.ci.current.value)){
				updateEmployee({

					id: idEmployee,
					name: this.name.current.value,
					lastName: this.lastName.current.value,
					ci: this.ci.current.value

				},({data})=>{

					if(data.update !==undefined && data.update){

						let newData = JSON.parse(localStorage.session);
						newData.displayName = this.name.current.value;
						newData.lastName = this.lastName.current.value;
						newData.ci = this.ci.current.value;
						localStorage.session = JSON.stringify(newData);

						this.props.recoveryData();

						swal('Genial','Tus datos se guardaron con exito','success');

					}else{
						this.toastMessage(toast.error, "Ups... tuvimos un problema al guardar tus datos.");

					}
					this.enableButton(true);
				});
			}else{
				this.enableButton(true);
				this.toastMessage(toast.error, `"${this.ci.current.value}" no es un carnet valido para el pais de Bolivia.`);		
			}

		}else{
			this.enableButton(true);
			this.toastMessage(toast.error, "Debes llenar todo los campos para poder actualizar tus datos.");
		}




	}

	toastMessage = ( toast, message )=>{
		toast( message ,{
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined
				});		
	}

	render(){

		const { idEmployee ,displayName, lastName, ci, photoURL, email, nameAccessLevel  } = JSON.parse(localStorage.session);

		// console.log( JSON.parse(localStorage.session) );
		const {enableButton} = this.state;

		return(
			<Fragment>
				<ContainerProfile>
					
					<ContainerForm>
					
						<ContainerTitle>
							<TitleEdit>
								<FontAwesomeIcon icon={ faUserEdit }/>
								&nbsp;Editar Perfil	
							</TitleEdit>
							<Position>
								{nameAccessLevel}
							</Position>
							
						</ContainerTitle>

						<ContainerPhoto>

							<Photo image={photoURL}/>
							<PhotoIcon>
								<FontAwesomeIcon icon={ faCamera }/>
							</PhotoIcon>

						</ContainerPhoto>

						<EmailProfile>
							{ email }
						</EmailProfile>

						<ContainerData>
							<InputData ref={ this.name } type="text" placeholder ="Introduce tu nombre" defaultValue={displayName!=="vacio"?displayName:""}/>
							<InputData ref={ this.lastName } type="text" placeholder ="Introduce tu apellido" defaultValue={lastName!=="vacio"?lastName:""}/>
							<InputData ref={ this.ci } type="text" placeholder ="Introduce tu numero de ci" defaultValue={ci!=="vacio"?ci:""}/>	
						</ContainerData>

						<ContainerButton>
							<ButtonSave enabled={ enableButton } onClick={()=>{
								if(enableButton) this.updateHandler( {idEmployee} );
							}}>
								<FontAwesomeIcon spin={!enableButton} icon={ enableButton?faCheck:faSpinner}/>
								&nbsp; { enableButton ? "Confirmar" : "Espera un momento..." }
							</ButtonSave>
						</ContainerButton>

					</ContainerForm>

				</ContainerProfile>
				<ToastContainer/>
			</Fragment>
		);
	}
}


export default Profile;