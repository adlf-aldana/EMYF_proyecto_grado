import React, { Component } from "react";

import { withRouter } from "react-router-dom";

import {
	Container,
	Header,
	BackButton,
	Title,
	ContenidoTable,
	Input,
	InputSec,
	InputTer
} from './../@styles/newRequiM';

import {
	FontAwesomeIcon,
	faChevronLeft,
} from './../../../themes/icons';

 class NuevoMaterial extends Component{
 	render(){
 		return(
 				<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/requirements');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>  NUEVO REQUERIMIENTO DE MATERIAL</Title>
					
				</Header>

				<ContenidoTable>
					
					<table border="2" id="tabla" ref={this.table} summary="Requerimiento de material">
						<thead>
							<tr>
								<th colSpan="5" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="4" scope="col">FECHA <Input type="date"/></th>
								<th colSpan="2" scope="col">CÓDIGO</th>								
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre de equipo</th>
								<th scope="col">Código</th>
								<th scope="col">Artículo</th>
								<th scope="col">Modelo o tamaño</th>
								<th scope="col">Marca</th>
								<th scope="col">Unidad</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Propósito</th>
								<th scope="col">Tiempo de llega</th>
								<th scope="col">Observaciones</th>

							</tr>
						</thead>
						<tbody>
							
										<tr>
											<th >1</th>
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
												<Input></Input>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
										</tr>
										<tr>
											<th >2</th>
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
												<Input></Input>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
										</tr>
										<tr>
											<th >3</th>
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
												<Input></Input>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputSec></InputSec>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
											<td>
												<InputTer></InputTer>
											</td>
											<td>
												<Input></Input>
											</td>
										</tr>
						</tbody>
						<tbody>
							<tr>
								<th colSpan="2" scope="col">Solicitante:</th>
								<td colSpan="2" ></td>
								<th scope="col">Revisado por:</th>
								<th colSpan="3" scope="col"></th>
								<th scope="col">Aprobado por:</th>
								<th colSpan="2" scope="col"></th>
							</tr>
							<tr>
								<th colSpan="3" scope="col">Observaciónes del departamento tecnico y de proyectos.</th>
								<th colSpan="3" scope="col"></th>
								<th colSpan="2" scope="col">Observaciónes del departamento de comercialización:</th>
								<th colSpan="3" scope="col"></th>
							</tr>
							
						</tbody>





					</table>

				</ContenidoTable>
			</Container>
 			);
 	}
 }

 export default withRouter( NuevoMaterial );