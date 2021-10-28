import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from "react-bootstrap";
import { addStockInventory, getListMaterialOrden } from './../../apiRest/requests'

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
	Delete,
	Income,
	Egress
} from './@styles/registrationIE';

import { OverlayEdit,
		 ContenedorModalEdit,
		 TittleEdit,
		 ContainerData,
		 InputData} from './../../views/Providers/@styles/modalEdit';

import { Overlay,
		ContenedorModal,
		ButtonClose } from './../../views/Control/@styles/modal';

import { ContainerRep,
		HeaderRep,
		HeaderRepSec,
		TitleRep,
		TitleSec,
		ContenidoTableRep,
		ContenidoTableRepSec,
		Input } from './../../views/Control/@styles/report';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSearch,
	faPen,
	faTrashAlt,
	faSave
} from './../../themes/icons';

class RegistrationIE extends Component{
	state={
		isOpen: false,
		isOpenSec: false,
		isOpenEdit: false,
		idM:"",
		listMaterial:[{
			name:"-",
			minimumAmount:"-",
			unit:"-",
			amount:"-",
			priceUnit:"-",
			income:"-",
			egress:"-",
			balance:"-"
		}]
	}

	constructor(props){
		super(props);
		this.inputStock = React.createRef();
	}

	recoveryData = ()=>{
		getListMaterialOrden(({data})=>{
			console.log(data.data);
			this.setState({
				listMaterial: data.data?data.data:[]
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
	openModalEdit =()=>this.setState({isOpenEdit:true});
	closeModalEdit =()=>this.setState({isOpenEdit:false});

	render() {
		const { listMaterial } = this.state;
		
		console.log(this.props);
		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/inventory');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> REGISTRAR INGRESOS Y EGRESOS</Title>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar material"></Buscador>
						
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
								<th scope="col">Descripción</th>
								<th scope="col">Cantidad mínima</th>
								<th scope="col">Unidad</th>
								<th scope="col">Cantidad inicio</th>
								<th scope="col">Precio unitario</th>
								<th scope="col">Cantidad ingreso</th>
								<th scope="col">Cantidad egreso</th>
								<th scope="col">Cantidad saldo</th>
								<th scope="col"></th>
								<th scope="col"></th>
								<th scope="col"></th>
								<th scope="col"></th>
							</tr>
						</thead>
						<tbody>

							
												<tr>
													<td>1</td>
													<td>name</td>
													<td>minimumAmount</td>
													<td>unit</td>
													<td>amount</td>
													<td>priceUnit</td>
													<td>Income</td>
													<td>egress</td>
													<td>balance</td>
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
													<td>
														<Income onClick={()=>{this.openModal();this.setState({idM:1})}}>Ingreso</Income>
													</td>
													<td>
														<Egress onClick={this.openModalSec}>Egreso</Egress>
													</td>
												</tr>
												
									
						</tbody>
					</table>
				</ContenidoTable>
			<Modal show={this.state.isOpen}>
					<Overlay>

					<ContenedorModal>
						<ContainerRep>
							<HeaderRep>
								
								<TitleRep> REGISTRAR INGRESO </TitleRep>
								
							</HeaderRep>

							<ContenidoTableRep>
								<table>

									<thead>
										
										{/*<tr>
											<th scope="col">Fecha:</th>
											<td>
												<Input type="date"></Input>
											</td>							
										</tr>*/}
										<tr>
											<th scope="col">Cantidad Ingreso:</th>
											<td>
												<Input type="number" ref={this.inputStock}></Input>
											</td>							
										</tr>
										{/*<tr>
											<th scope="col">Monto Ingreso:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>*/}
									</thead>
									
								</table>

							</ContenidoTableRep>

						</ContainerRep>
						<ButtonClose onClick={()=>{
							//hacer peticion al servidor
							console.log(this.inputStock.current.value);//string
							addStockInventory({
							 myId: JSON.parse(localStorage.session).idEmployee,
							 newStock:parseInt(this.inputStock.current.value),
							 idM:this.state.idM
							},(result)=>{
								console.log(result);
								//actualizar tabla con una llamada al servidor
								this.closeModal();
							});

						}}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>
				

			<Modal show={this.state.isOpenSec}>
					<Overlay>

					<ContenedorModal>
						<ContainerRep>
							<HeaderRepSec>
								<TitleSec> REGISTRAR EGRESO </TitleSec>
							</HeaderRepSec>

							<ContenidoTableRepSec>
								<table>

									<thead>
										
										<tr>
											<th scope="col">Fecha:</th>
											<td>
												<Input type="date"></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Cantidad Egreso:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
										<tr>
											<th scope="col">Monto Egreso:</th>
											<td>
												<Input></Input>
											</td>							
										</tr>
									</thead>
									
								</table>

							</ContenidoTableRepSec>

						</ContainerRep>
						<ButtonClose onClick={this.closeModalSec}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>
			<Modal show={this.state.isOpenEdit}>
				<OverlayEdit>
					<ContenedorModalEdit>
						<TittleEdit>EDITAR</TittleEdit>
						<ContainerData>
							<InputData type="text" placeholder ="Descripción"></InputData>
							<InputData type="text" placeholder ="Unidad"></InputData>
							<InputData type="text" placeholder ="Cantidad mínima"></InputData>

						</ContainerData>
						<ButtonClose onClick={this.closeModalEdit}>
							<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
						</ButtonClose>
						
					</ContenedorModalEdit>

				</OverlayEdit>
			</Modal>
			</Container>
	);
	}
}

export default withRouter( RegistrationIE );
