import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { Switch } from '@rmwc/switch';
import '@rmwc/switch/styles';


import { Contenedor,
	Container,
	Header,
	Reporte,
	Registro,
	Guardar,
	ButtonGuardar,
	Button,
	TableroBuscar,
	Buscador,
	IconBuscar,
	ContenidoTable
} from './../@styles/control';

import { Overlay,
		ContenedorModal,
		ButtonClose } from './../@styles/modal';

import { ContainerRep,
		HeaderRep,
		TableroBuscarRep,
		TitleRep,
		ContenidoTableRep,
		Input} from './../@styles/report';


import {
	FontAwesomeIcon,	
	faSearch,
	faFolderOpen,
	faFileSignature,
	faSave,
	faEye,
	faDownload,
	faTimesCircle
} from './../../../themes/icons'

class ControlHerramienta extends Component{

	state={
		isOpen: false,
		isOpenSec: false
	}
	openModal =()=>this.setState({isOpen:true});
	closeModal =()=>this.setState({isOpen:false});
	openModalSec =()=>this.setState({isOpenSec:true});
	closeModalSec =()=>this.setState({isOpenSec:false});
	render(){
		return(
		<Contenedor>
			<Container>
				<Header>
				
					<Reporte>
						<Button onClick={this.openModal}>
						<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes
						
						</Button>					
					</Reporte>
					
					
					<Registro>
						<Button onClick={this.openModalSec}>
							<FontAwesomeIcon icon={faFileSignature}/> &nbsp;Registro
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
							<th scope="col"></th>
							<th scope="col">Nombre Completo</th>
							<th scope="col">Herramienta</th>
							<th scope="col">Cantidad</th>
							<th scope="col">Fecha</th>
							<th scope="col">Área</th>
							<th scope="col">Observación</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
								<td>1</td>
								<td>Said Condori Romero</td>
								<td>Pala</td>
								<td>1</td>
								<td>7-10-2021</td>
								<td>mina</td>
								<td>mango roto</td>
								<td>
									<Switch defaultChecked/>
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
			</Container>

			<Modal show={this.state.isOpen}>
				<Overlay>

					<ContenedorModal>
						<ContainerRep>
							<HeaderRep>
								
								<TitleRep> REPORTES DIARIOS</TitleRep>
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

			<Modal show={this.state.isOpenSec}>
				<Overlay>

				<ContenedorModal>
					<ContainerRep>
						<HeaderRep>
							
							<TitleRep> REGISTRO DIARIOS</TitleRep>
							
						</HeaderRep>

						<ContenidoTableRep>
							<table>

								<thead>
									
									<tr>
										<th scope="col">Nombre Completo:</th>
										<td>
											<Input></Input>
										</td>							
									</tr>
									<tr>
										<th scope="col">Herramienta:</th>
										<td>
											<Input></Input>
										</td>							
									</tr>
									<tr>
										<th scope="col">Cantidad:</th>
										<td>
											<Input></Input>
										</td>							
									</tr>
									<tr>
										<th scope="col">Área de trabajo:</th>
										<td>
											<Input></Input>
										</td>							
									</tr>
									<tr>
										<th scope="col">Observación:</th>
										<td>
											<Input></Input>
										</td>							
									</tr>
								</thead>
								
							</table>

						</ContenidoTableRep>

					</ContainerRep>
					<ButtonClose onClick={this.closeModalSec}>
						<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
					</ButtonClose>
					
				</ContenedorModal>

			</Overlay>
			</Modal>
			
		</Contenedor>
		);
	}
}

export default withRouter(ControlHerramienta);