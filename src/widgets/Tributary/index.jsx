import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
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
	NewButton,
	ReportButton,
	Title,
	ContainerTable,
	Input
} from './../Payroll/@styles/payroll';


import {
	FontAwesomeIcon,
	faChevronLeft,
	faPlus,
	faFolderOpen
} from './../../themes/icons';

class PlanillaTributary extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/generatetemplate');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> PLANILLA TRIBUTARIA</Title>
					<NewButton>
					<FontAwesomeIcon icon={faPlus}/> &nbsp;Crear
					</NewButton>
					<ReportButton onClick={()=>{
							this.props.history.push('/reportTributary');
						}}>
						<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes
					</ReportButton>
				</Header>
				<ContainerTable>
					
					<table border="2" id="tabla">
						<thead>
							<tr>
								<th colSpan="5" scope="col">UFV anterior
									<Input  type="text" placeholder ="UFC ant."></Input>
								</th>
								<th colSpan="4" scope="col">UFV actual 
									<Input  type="text" placeholder ="UFV act."></Input>
								</th>
								<th colSpan="22" scope="col"></th>							
							</tr>

							<tr>
								<th scope="col"></th>
								<th scope="col">Año</th>
								<th scope="col">Período</th>
								<th scope="col">Código dependiente</th>
								<th scope="col">Nombres</th>
								<th scope="col">Apellido paterno</th>
								<th scope="col">Apellido materno</th>
								<th scope="col">Número de documento de identidad</th>
								<th scope="col">Tipo de documento</th>
								<th scope="col">Novedades</th>
								<th scope="col">Monto de ingreso neto</th>
								<th scope="col">dos salarios mínimos nacionales no imponibles</th>
								<th scope="col">Importe sujeto a impuesto</th>
								<th scope="col">Impuesto RC-IVA</th>
								<th scope="col">13% de dos salarios mínimos</th>
								<th scope="col">Impuesto neto RC-IVA</th>
								<th scope="col">F-110 casilla 693</th>
								<th scope="col">Saldo a favor de fisco</th>
								<th scope="col">Saldo a favor del dependiente</th>
								<th scope="col">Saldo a favor del dependiente del anterior período</th>
								<th scope="col">Mantenimiento de valor de saldo a favor del dependiente del anterior período</th>
								<th scope="col">Saldo del período anterior actualizado</th>
								<th scope="col">Saldo utilizado</th>
								<th scope="col">Impuesto RC-IVA retenido</th>
								<th scope="col">Pago a cuenta SIETE-RG período anterior</th>
								<th scope="col">F-110 casilla 465</th>
								<th scope="col">Total saldo a pago a cuenta SIETE-RG utilizado</th>
								<th scope="col">Pago a cuenta SIETE-RG utilizado</th>
								<th scope="col">Impuesto RC-IVA retenido</th>
								<th scope="col">Saldo crédito fiscal a favor del dependiente para el mes siguiente</th>
								<th scope="col"> Saldo de pago a cuenta SIETE-RG favor del dependiente para el mes siguiente</th>
							</tr>
						</thead>



						<tbody>
							
										<tr>
											<th scope="row">1</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>
												<Select label="Tipo">
												  <option value="CI">CI</option>
												  <option value="PASAPORTE">PASAPORTE</option>
												  
												 </Select>
											</td>
											<td>
												<Select label="Novedades">
												  <option value="I">I</option>
												  <option value="V">V</option>
												  <option value="D">D</option>
												 </Select>
											</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">1</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">2</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">3</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">4</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">5</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
										<tr>
											<th scope="row">6</th>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
											<td>-</td>
																	
										</tr>
							</tbody>

					</table>

				</ContainerTable>
			</Container>
	);
	}
}

export default withRouter( PlanillaTributary );