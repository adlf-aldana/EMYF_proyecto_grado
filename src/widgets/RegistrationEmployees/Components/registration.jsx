import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import { Select } from '@rmwc/select';
import { Radio } from '@rmwc/radio';
import '@rmwc/select/select.css';
import '@material/select/dist/mdc.select.css';
import '@material/floating-label/dist/mdc.floating-label.css';
import '@material/notched-outline/dist/mdc.notched-outline.css';
import '@material/line-ripple/dist/mdc.line-ripple.css';
import '@material/list/dist/mdc.list.css';
import '@material/menu/dist/mdc.menu.css';
import '@material/menu-surface/dist/mdc.menu-surface.css';
import '@material/ripple/dist/mdc.ripple.css';

import '@material/radio/dist/mdc.radio.css';
import '@material/form-field/dist/mdc.form-field.css';
import '@material/ripple/dist/mdc.ripple.css';

import {
	Container,
	Header,
	BackButton,
	Title,
	Contenido,
	PartFirst,
	Info,
	Photo,
	PartSecond,
	ContenidoTable,
	Input,
	InputSec,
	ButtonSave
} from './../@styles/registrationEmployees';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSave
} from './../../../themes/icons';

class RegistrarEmpleado extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/registration');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> REGISTRAR EMPLEADO</Title>
					
				</Header>
				<Contenido>
					<PartFirst>
						<Info>
							<ContenidoTable>
								<table>
									<thead>
										<tr>
											<th colSpan="3" scope="col">DATOS PERSONALES</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Apellido Paterno:
												<Input></Input>
											</td>
											<td>Apellido Materno:
												<Input></Input>
											</td>
											<td>Nombres:
												<Input></Input>
											</td>
										</tr>
										<tr>
											<td>
								
												<Select label="Tipo de documento" options={['CI', 'Pasaporte']}/>
											</td>
											<td>Número de documento:
												<Input></Input>
											</td>
											
											<td>
												<Select label="Expedido" options={['CH', 'LP','CB','OR','PT','TJ','SC','BE','PD']}/>
											</td>
										</tr>
										<tr>
											<td>Fecha de Nacimiento:
												<Input type="date"></Input>
											</td>
											<td>Sexo &nbsp;
												<Radio
											    label="Femenino"
											    value="F"
											    name="Sexo"
											    onChange={evt => console.log(evt.currentTarget.value)}
											  	/>
											  	<Radio
											    label="Masculino"
											    value="M"
											    name="Sexo"
											    onChange={evt => console.log(evt.currentTarget.value)}
											  	/>
											</td>
										</tr>
									</tbody>
								</table>
							</ContenidoTable>
							
						</Info>
						<Photo></Photo>
					</PartFirst>
					<PartSecond>
						<ContenidoTable>
							<table>
							<thead>
								<tr>
									<th colSpan="6" scope="col">DATOS GENERALES</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Persona con discapacidad &nbsp;
										<Radio
									    label="Sí"
									    value="1"
									    name="discapacidad"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									  	<Radio
									    label="No"
									    value="0"
									    name="discapacidad"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									</td>
									<td>Tutor de persona con discapacidad&nbsp;
										<Radio
									    label="Sí"
									    value="1"
									    name="tutor"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									  	<Radio
									    label="No"
									    value="0"
									    name="tutor"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									</td>
									<td>Jubilado &nbsp;
										<Radio
									    label="Sí"
									    value="1"
									    name="jubilado"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									  	<Radio
									    label="No"
									    value="0"
									    name="jubilado"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									</td>
									<td>Aportes AFP &nbsp;
										<Radio
									    label="Sí"
									    value="1"
									    name="aporte"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									  	<Radio
									    label="No"
									    value="0"
									    name="aporte"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									</td>
								</tr>
							</tbody>


							<thead>
								<tr>
									<th colSpan="6" scope="col">DATOS LABORALES</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Fecha de ingreso:&nbsp;
									<Input type="date"></Input>
									</td>
									<td>Fecha de retiro:&nbsp;
										<Input type="date"></Input>
									</td>
									<td>	
										<Select label="Motivo de retiro">
										  <option value="1">Retiro voluntario del trabajador</option>
										  <option value="2">Vencimiento de contrato</option>
										  <option value="3">Vencimiento de contrato</option>
										  <option value="4">Perjuicio material causado con intención en los instrumentos
de trabajo</option>
										  <option value="5">Revelación de secretos industriales</option>
										  <option value="6">Omisiones o imprudencias que afecten a la seguridad o higiene
industrial</option>
										  <option value="7">Inasistencia injustificada de más de seis días continuos</option>
										  <option value="8">Incumplimiento total o parcial del convenio</option>
										  <option value="9">Robo o hurto por el trabajador</option>
										  <option value="10">Retiro forzoso</option>
										</Select>
									</td>
									<td>	
										<Select label="Caja de salud">
										  <option value="1">Caja Nacional de Salud</option>
										  <option value="2">Caja Petrolera de Salud</option>
										  <option value="3">Caja de Salud de Caminos</option>
										  <option value="4">Caja Bancaria Estatal de Salud</option>
										  <option value="5">Caja de Salud de la Banca Privada</option>
										  <option value="6">Caja de Salud Cordes</option>
										  <option value="7">Seguro Social Universitario</option>
										  <option value="8"> Corporación del Seguro Social Militar</option>
										  <option value="9">Seguro Integral de Salud</option>
										 
										</Select>
									</td>
								</tr>
								<tr>
									<td>AFP &nbsp;
										<Radio
									    label="AFP Previsión"
									    value="1"
									    name="afp"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									  	<Radio
									    label="AFP Futuro"
									    value="2"
									    name="afp"
									    onChange={evt => console.log(evt.currentTarget.value)}
									  	/>
									</td>
									<td>Número AFPs:
										<Input></Input>
									</td>
									<td>	
										<Select label="Sucursal o ubicación" options={['1']}/>
									</td>
									<td>	
										<Select label="Clasificación laboral">
										  <option value="1">Ocupaciones de dirección en la administración pública y
empresas</option>
										  <option value="2">Ocupaciones de profesionales científicos e intelectuales</option>
										  <option value="3">Ocupaciones de técnicos y profesionales de apoyo</option>
										  <option value="4">Empleados de oficina</option>
										  <option value="5">Trabajadores de los servicios y vendedores del comercio</option>
										  <option value="6">Productoresy trab.en agrícultura y pesca</option>
										  <option value="7">Construcción, industria manufacturera</option>
										  <option value="8">Operadores de instalaciones y maquinarias</option>
										  <option value="9">Trabajadores no calificados</option>
										  <option value="10"> Fuerzas armadas</option>
										</Select>
									</td>
								</tr>
								<tr>
									<td>	
										<Select label="Cargo" options={[]}/>
									</td>
									<td>	
										<Select label="Modalidad de contrato" options={['1','2','3','4 ','5']}/>
									</td>
									<td>	
										<Select label="Tipo de contrato">
										  <option value="1">Escrito</option>
										  <option value="2">Verbal</option>
										</Select>
									</td>
									<td>Días pagados:
										<InputSec></InputSec>
										Horas pagados:
										<InputSec></InputSec>
									</td>
								</tr>
								<tr>
									<td>Días pagados:
										<InputSec></InputSec>
									</td>
									<td>Horas pagados:
										<InputSec></InputSec>
									</td>
									
								</tr>
							</tbody>
							</table>
						</ContenidoTable>
					</PartSecond>
				</Contenido>
				
				<ButtonSave>
					<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
				</ButtonSave>
			</Container>
	);
	}
}

export default withRouter( RegistrarEmpleado );