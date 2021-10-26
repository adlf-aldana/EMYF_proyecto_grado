import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";

import { OverlayEdit,
		 ContenedorModalEdit,
		 TittleEdit,
		 ContainerData,
		 InputData,
		 ButtonSaveEdit} from './@styles/modalEdit';

import { Contenedor,
	Container,
	Header,
	Registro,
	Button,
	TableroBuscar,
	Buscador,
	IconBuscar,
	ContenidoTable
} from './../../views/Control/@styles/control';

import {
 	EditIcon,
 	Delete
} from "./../../widgets/RegistrationIE/@styles/registrationIE"; 

import { Overlay,
		ContenedorModal,
		ButtonClose } from './../../views/Control/@styles/modal';

import { ContainerRep,
		HeaderRep,
		TitleRep,
		ContenidoTableRep,
		Input} from './../../views/Control/@styles/report';

import {
	FontAwesomeIcon,
	faPlus,
	faPen,
	faTrashAlt,
	faSave,
	faSearch
} from "./../../themes/icons";

import { getListProviders, updateProviders } from './../../apiRest/requests';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';

class Providers extends Component {
	constructor(props){
		super(props);
		this.table=React.createRef();
		this.name = React.createRef();
		this.address = React.createRef();
		this.phone = React.createRef();
		this.mobile = React.createRef();
		this.email = React.createRef();
		this.description = React.createRef();
	}
	state={
		isOpen: false,
		toastManager: this.props.toastManager,
		isOpenEdit: false,
		listProviders:[{
			name:"-",
			address:"-",
			phone:"-",
			mobile:"-",
			email:"-",
			description:"-"
		}]

	}

	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});
	openModalEdit =()=>this.setState({isOpenEdit:true});
	closeModalEdit =()=>this.setState({isOpenEdit:false});
	
	recoveryData = ()=>{
		getListProviders(({data})=>{
			console.log(data.data);
			this.setState({
				listProviders: data.data?data.data:[]
			});
		});
	}
	componentDidMount(){
		this.recoveryData();
	}
	render() {

		const { listProviders } = this.state;
		
		console.log(this.props);
		return (
		<Contenedor>
			<Container>
				<Header>
					
					<Registro>
						<Button onClick={this.openModal}>
							<FontAwesomeIcon icon={faPlus}/> &nbsp;Registrar
						</Button>					
					</Registro>
					<TableroBuscar>
						<Buscador type="text" placeholder ="Buscar proveedor"></Buscador>
						
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
								<th scope="col">Proveedor</th>
								<th scope="col">Dirección</th>
								<th scope="col">Teléfono</th>
								<th scope="col">Celular</th>
								<th scope="col">Correo electrónico</th>
								<th scope="col">Descripción</th>
								<th scope="col">Editar</th>
								<th scope="col">Eliminar</th>
							</tr>
						</thead>
						<tbody>
						{
						listProviders.map(({
							name,
							address,
							phone,
							mobile,
							email,
							description
						}, index)=>{
							return(
							<tr key={index}>
								<td>{index+1}</td>
								<td>{name}</td>
								<td>{address}</td>
								<td>{phone}</td>
								<td>{mobile}</td>
								<td>{email}</td>
								<td>{description}</td>
								<td>
									<EditIcon onClick={this.openModalEdit}>
										<FontAwesomeIcon icon={faPen} />
									</EditIcon>
								</td>
								<td>
									<Delete>
										<FontAwesomeIcon icon={faTrashAlt} />
									</Delete>
								</td>
							</tr>
							)
							})
						}
						</tbody>
					</table>
				</ContenidoTable>

				<Modal show={this.state.isOpen}>
					<Overlay>

					<ContenedorModal>
						<ContainerRep>
							<HeaderRep>
								
								<TitleRep> REGISTRAR PROVEEDOR </TitleRep>
								
							</HeaderRep>

							<ContenidoTableRep>
								<table>

									<thead>
										
										<tr>
											<th scope="col">Proveedor:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Dirección:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Teléfono:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Celular:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Correo electrónico:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Descripción:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
									</thead>
									
								</table>

							</ContenidoTableRep>

						</ContainerRep>
						<ButtonClose onClick={this.closeModal}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>

			<Modal show={this.state.isOpenEdit}>
				<OverlayEdit>
					<ContenedorModalEdit>
						<TittleEdit>EDITAR PROVEEDOR</TittleEdit>
						<ContainerData>
							<InputData type="text" placeholder ="Nombre proveedor"></InputData>
							<InputData type="text" placeholder ="Dirección"></InputData>
							<InputData type="text" placeholder ="Teléfono"></InputData>
							<InputData type="text" placeholder ="Celular"></InputData>
							<InputData type="text" placeholder ="Correo electrónico"></InputData>
							<InputData type="text" placeholder ="Descripción"></InputData>
						</ContainerData>
						<ButtonSaveEdit onClick={this.closeModalEdit}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonSaveEdit>
					</ContenedorModalEdit>
				</OverlayEdit>
			</Modal>
			</Container>
			
		</Contenedor>
		);
	}
}
export default withRouter(Providers);
