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
	ContainerContenido,
	ContainerPI,
	Photo,
	Info1,
	DataPersonal,
	Info2,
	First,
	TituloGen,
	TituloLab,
	DataGen,
	DataLab,
	Datos,
	Titulo,
	Text,
	Input,
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
				<ContainerContenido>
					<ContainerPI>
						<Info1>
						<Titulo>DATOS PERSONALES</Titulo>
						<DataPersonal>
						
							<Text>Nombre:
								<Input placeholder="Introducir nombre"></Input>
							</Text>
							<Text>Apellido paterno:
								<Input placeholder="Introducir apellido paterno"></Input>
							</Text>
							<Text>Apellido materno:
								<Input placeholder="Introducir apellido materno"></Input>
							</Text>
							<Text>Fecha de nacimiento:
								<Input type="date"></Input>
							</Text>
							
							
						</DataPersonal>	
						</Info1>
						
						<Photo></Photo>
					</ContainerPI>
					<Info2>
						<First>
							<Datos>
								<Text>
								<Select label="Tipo de documento" options={['CI', 'Pasaporte']}/>

							</Text>
							<Text>Nro. de documento:
								<Input placeholder="Documento"></Input>
							</Text>					
						<Text>
							<Select label="Expedido" options={['CH', 'LP','CB','OR','PT','TJ','SC','BE','PD']}/>
						</Text>	
						<Text>
							Sexo: &nbsp;
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
							</Text>

							</Datos>
						</First>
						<TituloGen>
							<Titulo>DATOS GENERALES</Titulo>
						</TituloGen>
						<DataGen>
							<Datos>
								<Text>Persona con discapacidad &nbsp;
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
									</Text>
									<Text>Tutor de persona con discapacidad&nbsp;
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
									</Text>
									<Text>Persona jubilado &nbsp;
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
									</Text>
									<Text>Aportes AFP &nbsp;
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
									</Text>
							</Datos>
						</DataGen>
						<TituloLab>
							<Titulo>DATOS LABORALES</Titulo>
						</TituloLab>
						<DataLab>
							<Datos>
								<Text>Fecha de ingreso:&nbsp;
									<Input type="date"></Input>
								</Text>
								<Text>Fecha de retiro:&nbsp;
									<Input type="date"></Input>
								</Text>
								<Text>	
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
								</Text>
								<Text>	
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
								</Text>
								<Text>AFP &nbsp;
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
								</Text>
								<Text>Número AFPs:
									<Input placeholder="Número"></Input>
								</Text>
								<Text>	
									<Select label="Sucursal o ubicación" options={['1']}/>
								</Text>
								<Text>	
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
								</Text>
								<Text>	
										<Select label="Cargo" options={[]}/>
									</Text>
									<Text>	
										<Select label="Modalidad de contrato" options={['1','2','3','4 ','5']}/>
									</Text>
									<Text>	
										<Select label="Tipo de contrato">
										  <option value="1">Escrito</option>
										  <option value="2">Verbal</option>
										</Select>
									</Text>
									<Text>Días pagados:
										<Input placeholder="Días"></Input>
									</Text>
									<Text>Horas pagados:
										<Input placeholder="Horas"></Input>
									</Text>
							</Datos>
						</DataLab>
					</Info2>

				</ContainerContenido>

				<ButtonSave>
					<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
				</ButtonSave>
			</Container>
	);
	}
}

export default withRouter( RegistrarEmpleado );