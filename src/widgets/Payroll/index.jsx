import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	NewButton,
	ReportButton,
	Title,
	ContainerTable,
	Input
} from './/@styles/payroll';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faPlus,
	faFolderOpen
} from './../../themes/icons';

class PlanillaPayroll extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/generatetemplate');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> PLANILLA DE SUELDO</Title>
					<NewButton>
					<FontAwesomeIcon icon={faPlus}/> &nbsp;Crear
					</NewButton>
					<ReportButton onClick={()=>{
							this.props.history.push('/reportPayroll');
						}}>
						<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes
					</ReportButton>
				</Header>

				<ContainerTable>
					
					<table border="2" id="tabla">
						<thead>
							<tr>
								<th colSpan="5" scope="col">NIT: 155818020</th>
								<th colSpan="4" scope="col">Nº Patronal: 11-139-0003</th>
								<th colSpan="28" scope="col"/>
																
							</tr>
							<tr>
								<th colSpan="37" scope="col">
								PLANILLA DE SUELDOS Y SALARIOS PERSONAL ADMINISTRATIVO (EXPRESADO EN BOLIVIANOS)
								</th>
							</tr>
							<tr>
								<th colSpan="5" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="4" scope="col">FECHA 
									<Input type="date"></Input>
								</th>	
								<th colSpan="28" scope="col"/>						
							</tr>
							<tr>
								<th colSpan="17" scope="col"></th>
								<th colSpan="2" scope="col">Horas extras</th>
								<th colSpan="5" scope="col">Bonos</th>
								<th colSpan="2" scope="col">Horas extras</th>
								<th colSpan="1" scope="col"></th>
								<th colSpan="3" scope="col">Descuentos</th>	
								<th colSpan="7" scope="col"></th>							
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Tipo de documento</th>
								<th scope="col">Documento de identidad</th>
								<th scope="col">Exp.</th>
								<th scope="col">Apellido paterno</th>
								<th scope="col">Apellido materno</th>
								<th scope="col">Nombres</th>
								<th scope="col">Nacionalidad</th>
								<th scope="col">Fecha de nacimiento</th>
								<th scope="col">Sexo</th>								
								<th scope="col">Cargo</th>
								<th scope="col">Fecha de ingreso</th>
								<th scope="col">Fecha de retiro</th>
								<th scope="col">Días pagados</th>
								<th scope="col">Horas pagadas</th>
								<th scope="col">Haber básico</th>
								<th scope="col">Bono Antiguedad</th>
								<th scope="col">Nro.</th>
								<th scope="col">Monto pagado</th>
								<th scope="col">Bono producción</th>
								<th scope="col">Bono incentivo</th>
								<th scope="col">otros bonos</th>
								<th scope="col">Recargo nocturno</th>
								<th scope="col">Desempeño laboral</th>
								<th scope="col">Nro.</th>
								<th scope="col">Monto Pagado</th>
								<th scope="col">Total ganado</th>
								<th scope="col">AFP previsión</th>
								<th scope="col">AFP futuro</th>
								<th scope="col">AFP 1% 5% 10%</th>
								<th scope="col">Sueldo neto</th>
								<th scope="col">sueldo imponible</th>
								<th scope="col">Impuesto nominal</th>
								<th scope="col">RC-IVA</th>
								<th scope="col">Nro. </th>
								<th scope="col">Monto descontado</th>
								<th scope="col">Líquido pagable</th>
								
							</tr>
						</thead>



						<tbody>
						
							
										<tr>
											<th scope="row">1</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
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
											<th scope="row">1</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
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
											<th scope="row">1</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
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
											<th scope="row">1</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
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
											<th scope="row">1</th>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
											<td></td>
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

export default withRouter( PlanillaPayroll );