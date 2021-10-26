import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	TableroBuscar,
	IconBuscar,
	Buscador,
	Title,
	ContenidoTable
} from './../../EnableRegistration/@styles/enableRegistration';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSearch
} from './../../../themes/icons';

class History extends Component{
	render(){
		return(
			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/enableEmployees');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>HISTORIAL DE USUARIOS DESAHIBILITADOS</Title>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar empleado"></Buscador>
						
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
								<th scope="col">Nombre</th>
								<th scope="col">Apellido paterno</th>
								<th scope="col">Apellido materno</th>
								<th scope="col">Nivel de usuario</th>
								<th scope="col">Correo electrónico</th>
								<th scope="col">Fecha de inicio</th>
								<th scope="col">Fecha de retiro</th>
							</tr>
						</thead>
						<tbody>
							<tr>
							
								<td >1</td>
								<td >said</td>
								<td >romelro</td>
								<td >loskdpsa</td>
								<td >administratorcampamento</td>
								<td >saidbueodfos@gmail.com</td>
								<td>10/10/2021</td>
								<td>21/10/2021</td>														
							</tr>
						</tbody>
					</table>
				</ContenidoTable>
			</Container>
			);
	}
}

export default withRouter( History );