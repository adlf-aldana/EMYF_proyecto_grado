import React, {Component} from 'react';
import { withRouter,Redirect } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	Title,
	ContainerTable
} from './../RequirementViewTable/@styles/RequirementViewTableStyles';

import {
	FontAwesomeIcon,
	faChevronLeft,
} from './../../themes/icons';

class RequirimentPersonalTable extends Component{
	
	render(){
		
		return(
		
		
			<Container>
				<Header>
					<BackButton onClick={()=>{
						this.props.history.push('/administrator/requirimentsPersonal');
					}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>
						REQUERIMIENTO DE PERSONAL
					</Title>
					
				</Header>


				<ContainerTable>
					
					<table border="2" id="tabla">
						<thead>
							<tr>
								<th colSpan="4" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="2" scope="col">FECHA: </th>
								<th colSpan="1" scope="col">CÓDIGO:</th>
																
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Solicitud:</td>
								<th colSpan="6">
									
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
												
											</td>
											<td>
												
											</td>
											<td>
												
											</td>
											<td>
												
											</td>
											<td>
												
											</td>
											<td>
												
											</td>
											
											
										</tr>
										
						</tbody>
						<thead>
							<tr>
								<th colSpan="7"></th>
							</tr>
						</thead>
						
					</table>

				</ContainerTable>
			

			</Container>
		)
	}
}

export default withRouter( RequirimentPersonalTable );