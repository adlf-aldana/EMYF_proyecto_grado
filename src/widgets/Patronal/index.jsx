import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	NewButton,
	ReportButton,
	Title
} from './../Payroll/@styles/payroll';

import { ContainerTable,
		Input } from './@styles/patronal';
import {
	FontAwesomeIcon,
	faChevronLeft,
	faPlus,
	faFolderOpen
} from './../../themes/icons';

class PlanillaPatronal extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/generatetemplate');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> PLANILLA APORTE PATRONAL</Title>
					<NewButton>
					<FontAwesomeIcon icon={faPlus}/> &nbsp;Crear
					</NewButton>
					<ReportButton>
					<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes
					</ReportButton>
				</Header>
				<ContainerTable>
					
					<table border="2" id="tabla" ref={this.table} summary="Requerimiento de material">
						<thead>
							<tr>
								<th colSpan="5" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="4" scope="col">FECHA 
									<Input type="date"></Input>
								</th>							
							</tr>
							<tr>
								<th colSpan="1" scope="col"></th>
								<th colSpan="1" scope="col"></th>
								<th colSpan="4" scope="col">APORTES SIP</th>
								<th colSpan="2" scope="col">FONDO SOLIDARIO</th>
								<th colSpan="1" scope="col"></th>								
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Pro-vivienda</th>
								<th scope="col">Cotización mensual </th>
								<th scope="col">Prima por Riesgo Común</th>
								<th scope="col">Prima por Riesgo Profesional</th>
								<th scope="col">Comisión</th>
								<th scope="col">Aporte Patronal Solidario</th>
								<th scope="col">Aporte Laboral Solidario</th>
								<th scope="col">Fondo Minero</th>
								
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
											<td>-</td>
											
										</tr>
							
							<tr>
								<th scope="row"></th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								
							</tr>
							<tr>
								<th scope="row"></th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								
							</tr>
		
							
						</tbody>

					</table>

				</ContainerTable>
			</Container>
	);
	}
}
export default withRouter( PlanillaPatronal );