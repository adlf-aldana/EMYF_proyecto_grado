import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { Select } from '@rmwc/select';
import '@rmwc/select/select.css';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/ripple/dist/mdc.ripple.css';

import {
	Container,
	Header,
	BackButton,
	TableroBuscar,
	IconBuscar,
	Buscador,
	Title,
	ContenidoTable,
	Button
} from './../@styles/enableRegistration';

import { Overlay,
		ContenedorModal,
		Tittle,
		Imagen,
		Email,
		Input,
		Cargo,
		ButtonClose } from './../@styles/modalSec'

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSearch,
	faDesktop,
	faSave
} from './../../../themes/icons';

class Registrar extends Component{
	state={
		isOpen: false
	}
	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});
	render(){
		return(
			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/enableEmployees');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>HABILITAR USUARIO</Title>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar empleado"></Buscador>
						
						<IconBuscar>
							<FontAwesomeIcon icon={faSearch}/>
						</IconBuscar>
						
					</TableroBuscar>
				</Header>

				<ContenidoTable>
					<table>

						<thead>
							
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre</th>
								<th scope="col">Apellido paterno</th>
								<th scope="col">Apellido materno</th>
								<th scope="col">Cargo</th>
								<th scope="col">Nivel de usuario</th>
								<th scope="col">Correo electrónico</th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>
							
							<tr>
							
								<td >1</td>
								<td >said</td>
								<td >romelro</td>
								<td >loskdpsa</td>
								<td >administrator campamento</td>
								<td >administratorcampamento</td>
								<td >saidbueodfos@gmail.com</td>
								<td>
									<Button onClick={this.openModal}>
										<FontAwesomeIcon icon={faDesktop}/>&nbsp;Habilitar
									</Button>
								</td>
								
														
							</tr>
						</tbody>
					</table>
				</ContenidoTable>
				<Modal show={this.state.isOpen}>
					<Overlay>
							<ContenedorModal>
							<Tittle>HABILITAR USUARIO</Tittle>
							<Imagen></Imagen>
							<Email>@gmail.com</Email>
							<Input type="date"></Input>
							<Cargo>
								<Select label="Nivel de usuario" options={['Administrador Central', 'Administrador Campamento', 'Jefe de almacén']}/>
							</Cargo>
							<ButtonClose onClick={this.closeModal}>
								<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
							</ButtonClose>
							</ContenedorModal>
						
					</Overlay>
				</Modal>
			</Container>
			);
	}
}
export default withRouter( Registrar );