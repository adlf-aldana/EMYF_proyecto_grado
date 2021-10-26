import React,{Component} from 'react';
import { Modal } from "react-bootstrap";

import {
	FontAwesomeIcon,
	faHammer,
	faUserFriends,
	faShoppingCart,
	faSave,
	faJenkins
} from './../../../themes/icons';

import { withRouter } from 'react-router-dom';

import {
	Container,
	Header,
	Employee,
	Buy,
	ButtonHeader,
	Content,
	ContainerForm,
	Button,
	Icon
} from './../@styles/registration';

import { Overlay,
		 ContenedorModal,
		 Tittle,
		 ContainerInput,
		 Input,
		 ButtonClose } from './../@styles/modalC'

class Registrar extends Component{
	state = {
		isOpen: false
	}
	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});
	render() {
		return (
			
			<Container>
			<Header>
				<Employee>
					<ButtonHeader onClick={()=>{
						this.props.history.push("/employeesRegistration");}}>
					<FontAwesomeIcon icon={ faUserFriends }/>&nbsp;Empleados
					</ButtonHeader>
				</Employee>
				<Buy> 
					<ButtonHeader onClick={()=>{
						this.props.history.push("/buy");}}>
					<FontAwesomeIcon icon={ faShoppingCart }/>&nbsp;Compras
					</ButtonHeader>
				</Buy>		
			</Header>
			<Content>
				<ContainerForm>
					<Icon>
						<FontAwesomeIcon icon={ faUserFriends }/>
					</Icon>
					<Button onClick={()=>{
						this.props.history.push("/registrationEmployees");}}>
						 Registrar empleado
					</Button>
				</ContainerForm>
				<ContainerForm>
					<Icon>
						<FontAwesomeIcon icon={ faHammer }/>
					</Icon>
					<Button onClick={()=>{
						this.props.history.push("/registrationMaterial");
					}}>Registrar compra
					</Button>
				</ContainerForm>
				<ContainerForm>
					<Icon>
						<FontAwesomeIcon icon={ faJenkins }/>
					</Icon>
					<Button onClick={this.openModal}>Registrar cargo
					</Button>
				</ContainerForm>
			</Content>
			<Modal show={this.state.isOpen}>
				<Overlay>
					<ContenedorModal>
						<Tittle>REGISTRAR CARGO</Tittle>
						<ContainerInput>
							<Input type="text" placeholder ="Cargo"></Input>
							<Input type="text" placeholder ="Sueldo"></Input>
							
						</ContainerInput>
						<ButtonClose onClick={this.closeModal}>
								
									<FontAwesomeIcon icon={ faSave }/>&nbsp;Guardar
								
						</ButtonClose>
					</ContenedorModal>
				</Overlay>
			</Modal>
			</Container>

		);
	}
}


export default withRouter(Registrar);