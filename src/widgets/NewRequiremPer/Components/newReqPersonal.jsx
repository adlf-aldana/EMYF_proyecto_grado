import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import { Input10 } from './../@styles/personal';
import {
	Container,
	Header,
	BackButton,
	Title,
	ContenidoTable,
	Input,
	InputSec
} from './../../NewRequirementM/@styles/newRequiM';

import {
	FontAwesomeIcon,
	faChevronLeft,
} from './../../../themes/icons';

 class NuevoPersonal extends Component{
 	render(){
 		return(
 				<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/requirimentsPersonal');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> NUEVO REQUERIMIENTO DE PERSONAL</Title>
					
				</Header>

				<ContenidoTable>
					
					<table border="2" id="tabla" ref={this.table} summary="Requerimiento de material">
						<thead>
							<tr>
								<th colSpan="5" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="4" scope="col">FECHA <Input type="date"/></th>
																
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Solicitud:</td>
								<th colSpan="6">
									<Input10></Input10>
								</th>
							</tr>
						</tbody>
						<thead>	
							<tr>
								<th colSpan="7">DETALLES DEL DEMANDE</th>
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Cargo</th>
								<th scope="col">Salario previsto</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Fecha ingreso</th>
								<th scope="col">Competencias requeridas para la contratación</th>
								<th scope="col">Descripción de trabajo</th>
								
							</tr>
						</thead>
						<tbody>
							
										<tr>
											<th>1</th>
											<td>
												<Input></Input>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<Input type="date"></Input>
											</td>
											<td>
												<Input></Input>
											</td>
											<td>
												<Input></Input>
											</td>
											
											
										</tr>
										
						</tbody>
						<thead>
							<tr>
								<th colSpan="7"></th>
							</tr>
						</thead>
						
					</table>

				</ContenidoTable>
			</Container>
 			);
 	}
 }

 export default withRouter( NuevoPersonal );