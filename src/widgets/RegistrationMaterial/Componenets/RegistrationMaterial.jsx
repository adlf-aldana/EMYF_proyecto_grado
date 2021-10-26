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
	Title,
	Input,
	ButtonSave
} from './../../../widgets/RegistrationEmployees/@styles/registrationEmployees';

import {ContenidoTable,
		InputPrimary,
		InputSecundary} from './../@styles/registrationMaterial';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSave
} from './../../../themes/icons';

class RegistrarMaterial extends Component{
	render() {

		return(
			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/registration');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> REGISTRAR MATERIAL</Title>
					
				</Header>
				<ContenidoTable>
					<table>
						<thead>
							<tr>
								<th colSpan="7" scope="col"></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td colSpan="5">
								  <Select label="Proveedor" options={[]}/>
								</td>
								<td colSpan="2">Fecha:
									<Input type="date"></Input>
								</td>
							</tr>
						</tbody>
						<thead>
							<tr>
								<th></th>
								<th scope="col">Nombre</th>
								<th scope="col">Modelo</th>
								<th scope="col">Unidad</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Precio Unitario</th>
								<th scope="col">Precio Total</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							    <td>1</td>
								<td>
									<InputPrimary></InputPrimary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
							<tr>
							    <td>2</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
							<tr>
							    <td>2</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
							<tr>
							    <td>3</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
							<tr>
							    <td>4</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
							<tr>
							    <td>5</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
								<td>
									<InputSecundary></InputSecundary>
								</td>
							</tr>
						</tbody>

					</table>   
				</ContenidoTable>
				<ButtonSave>
					<FontAwesomeIcon icon={faSave}/>&nbsp;Guardar
				</ButtonSave>
			</Container>					
	);
	}
}

export default withRouter( RegistrarMaterial );