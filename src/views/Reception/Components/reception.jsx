import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Checkbox } from '@rmwc/checkbox'; 
import '@rmwc/checkbox/styles';

import { Observation } from './../@Styles/reception';

import { Contenedor,
	Container,
	Header,
	Registro,
	Guardar,
	ButtonGuardar,
	Button,
	TableroBuscar,
	Buscador,
	IconBuscar,
	ContenidoTable
} from './../../Control/@styles/control';

import { Overlay,
		ContenedorModal,
		ButtonClose } from './../../Control/@styles/modal';

import { ContainerRep,
		HeaderRep,
		TableroBuscarRep,
		TitleRep,
		ContenidoTableRep } from './../../Control/@styles/report';
import {
	FontAwesomeIcon,	
	faSearch,
	faFileSignature,
	faEye,
	faDownload,
	faSave,
	faTimesCircle
} from './../../../themes/icons'

class Recepcion extends Component{
	state={
		isOpen: false
	}
	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});

	render(){
		return(
		<Contenedor>
			<Container>
				<Header>
					
					<Registro>
						<Button onClick={this.openModal}>
							<FontAwesomeIcon icon={faFileSignature}/> &nbsp;Reportes
						</Button>					
					</Registro>
					<TableroBuscar>
						<Buscador type="text" placeholder ="Buscar Empleado"></Buscador>
						
						<IconBuscar>
							<FontAwesomeIcon icon={faSearch}/>
						</IconBuscar>	
					</TableroBuscar>	
				</Header>

				<ContenidoTable>
				<table>
					<thead>
						<tr>
							<th colSpan="5" scope="col">Proveedor</th>
							<th colSpan="3"scope="col">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="5">Industriasjbdk</td>
							<td colSpan="3">9-10-2021</td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th scope="col"></th>
							<th scope="col">Cantidad</th>
							<th scope="col">Descripción</th>
							<th scope="col">Modelo</th>
							<th scope="col">Unidad</th>
							<th scope="col">Precio unitario</th>
							<th scope="col">Precio Total</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
								<td>1</td>
								<td>1</td>
								<td>arandela</td>
								<td>M8</td>
								<td>pieza</td>
								<td>2.5</td>
								<td>2.5</td>
								<td>
									<Checkbox/>
								</td>
						</tr>
						
					</tbody>
					<thead>
						<tr>
							<th colSpan="8" scope="col">Observaciones</th>

						</tr>
					</thead>
					<tbody>
						<tr>
							<td colSpan="8">
								<Observation></Observation>
							</td>
							
						</tr>
					</tbody>
					
				</table>

				</ContenidoTable>

				<Guardar>
					<ButtonGuardar>
						<Button>
							<FontAwesomeIcon icon={faSave}/>&nbsp; Guardar
						</Button>
					</ButtonGuardar>
				</Guardar>
			

			<Modal show={this.state.isOpen}>
				<Overlay>
					<ContenedorModal>
						<ContainerRep>
							<HeaderRep>
								
								<TitleRep> REPORTES DE RECEPCIÓN</TitleRep>
								<TableroBuscarRep>
								
									<Buscador type="text" placeholder ="Buscar reportes"></Buscador>
									
									<IconBuscar>
										<FontAwesomeIcon icon={faSearch}/>
									</IconBuscar>
									
								</TableroBuscarRep>
							</HeaderRep>

							<ContenidoTableRep>
								<table>

									<thead>
										
										<tr>
											<th scope="col"></th>
											<th colSpan="3" scope="col">Fecha</th>
											
											<th scope="col">Ver</th>
											<th scope="col">Descargar</th>
											
										</tr>
									</thead>
									<tbody>
										
										<tr>
										
											<td >1</td>
											<td colSpan="3">27-09-2021</td>
											<td>
												<Button>
													<FontAwesomeIcon icon={faEye}/>
												</Button>
											</td>
											<td>
												<Button>
													<FontAwesomeIcon icon={faDownload}/>
												</Button>
											</td>
																	
										</tr>
									</tbody>

								</table>

							</ContenidoTableRep>

						</ContainerRep>
						<ButtonClose onClick={this.closeModal}>
							<FontAwesomeIcon icon={faTimesCircle}/>&nbsp;Cerrar
						</ButtonClose>
						
					</ContenedorModal>

				</Overlay>
			</Modal>

			</Container>
		</Contenedor>
		);
	}
}
export default withRouter(Recepcion);