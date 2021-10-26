import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Radio } from '@rmwc/radio';
import { Select } from '@rmwc/select';
import '@material/radio/dist/mdc.radio.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/ripple/dist/mdc.ripple.css';

import '@rmwc/select/select.css';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/ripple/dist/mdc.ripple.css';

import { ContainerDuo,
		DataC,
		NameC,
		ContainerData,
		InputData,
		NameData } from './../@styles/habilitar'

import {
	Container,
	Header,
	BackButton,
	TableroBuscar,
	IconBuscar,
	Buscador,
	Title,
	ContenidoTable,
	EditIcon,
	Delete
} from './../../RegistrationIE/@styles/registrationIE';

import { Overlay,
		ContenedorModal,
		ButtonClose } from './../../../views/Control/@styles/modal';

import { ContainerRep,
		HeaderRep,
		TitleRep } from './../../../views/Control/@styles/report';
import {
	FontAwesomeIcon,
	faChevronLeft,
	faSearch,
	faPen,
	faUserSlash,
	faSave
} from './../../../themes/icons';

import { getListEmployees } from './../../../apiRest/requests';


class Habilitar extends Component{
	state={
		isOpen: false,
		isOpenSec: false,
		listEmployees:[{
			name:"-",
			lastName:"-",
			ci:"-",
			cargo:"-",
		}]
	}
	constructor(props){
		super(props);
		this.match = this.props.match;
		this.history = this.props.history;
		this.table=React.createRef();
	}
	recoveryData = ()=>{
		getListEmployees(({data})=>{
			console.log(data.data);
			this.setState({
				listEmployees: data.data?data.data:[]
			});
		});
	}
	componentDidMount(){
		this.recoveryData();
	}

	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});
	openModalSec =()=>this.setState({isOpenSec:true});
	closeModalSec =()=>this.setState({isOpenSec:false});
	render(){
		const { listEmployees } = this.state;
		console.log(this.props);
		return(
			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/registration');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>EMPLEADOS</Title>
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
								<th scope="col">CI</th>
								<th scope="col">Cargo</th>
								<th scope="col">Fecha de ingreso</th>
								<th scope="col">Contrato</th>
								<th scope="col">Editar</th>
								<th scope="col">Retirar</th>
							</tr>
						
						</thead>
						<tbody>
						{
						listEmployees.map(({
							name,
							lastName,
							ci,
							cargo
						}, index)=>{
							return(
								<tr key={index}> 
									<td>{index+1}</td>
									<td>{name}</td>
									<td>{lastName}</td>
									<td>{ci}</td>
									<td>{cargo}</td>
									<td>{cargo}</td>
									<td>{cargo}</td>
									<td>{cargo}</td>
									<td>
										<EditIcon onClick={this.openModal}>
											<FontAwesomeIcon icon={faPen} />
										</EditIcon>
									</td>
									<td>
										<Delete onClick={this.openModalSec}>
											<FontAwesomeIcon icon={faUserSlash} />
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
								
								<TitleRep> EDITAR DATOS EMPLEADO</TitleRep>
							</HeaderRep>

							<ContainerData>
								<InputData type="text" placeholder ="Introducir nombre"/>
								<InputData type="text" placeholder ="Introducir apellido paterno"/>
								<InputData type="text" placeholder ="Introducir apellido materno"/>
								<InputData type="text" placeholder ="Introducir fecha de nacimiento"/>
								
								<td>Persona con discapacidad &nbsp;
									<Radio
								    label="Sí"
								    value="si"
								    name="discapacidad"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								  	<Radio
								    label="No"
								    value="no"
								    name="discapacidad"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								</td>
								<td>Jubilado &nbsp;
									<Radio
								    label="Sí"
								    value="si"
								    name="jubilado"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								  	<Radio
								    label="No"
								    value="no"
								    name="jubilado"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								</td>
								
								<td>Tutor de persona con discapacidad&nbsp;
									<Radio
								    label="Sí"
								    value="si"
								    name="tutor"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								  	<Radio
								    label="No"
								    value="no"
								    name="tutor"
								    onChange={evt => console.log(evt.currentTarget.value)}
								  	/>
								</td>
								<td>	
									<Select label="Cargo" options={[]}/>
								</td>
								<td>	
									<Select label="Modalidad de contrato" options={['1','2','3','4 ','5']}/>
								</td>
							</ContainerData>
						</ContainerRep>
						<ButtonClose onClick={this.closeModal}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>
			<Modal show={this.state.isOpenSec}>
				<Overlay>

					<ContenedorModal>
						<ContainerRep>
							<HeaderRep>
								<TitleRep>RETIRAR EMPLEADO</TitleRep>
							</HeaderRep>
							
							<ContainerDuo>
							<NameC>
								<NameData>Yoseli Condori Romero</NameData>
							<	NameData>administrator</NameData>
							</NameC>
							<DataC>
							<ContainerData>
							
								<InputData type="text" placeholder ="Fecha de retiro"/>
								<td>	
									<Select label="Motivo retiro" options={['1','2','3','4 ','5','6','7','8','9','10']}/>
								</td>
							
							</ContainerData>
							</DataC>
							</ContainerDuo>
						</ContainerRep>
						<ButtonClose onClick={this.closeModalSec}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>
			</Container>
			);
	}
}
export default withRouter(Habilitar);