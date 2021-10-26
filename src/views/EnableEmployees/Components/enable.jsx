import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

import { Switch } from '@rmwc/switch';
import '@rmwc/switch/styles';

import { Contenedor,
	Container,
	Header,
	Reporte,
	Registro,
	Button,
	TableroBuscar,
	Buscador,
	IconBuscar,
	ContenidoTable
} from './../../../views/Control/@styles/control';


import {
	FontAwesomeIcon,
	faSearch,
	faUserCheck,
	faUserLock
} from './../../../themes/icons';

class ViewUser extends Component{
	constructor(){
		super()
		this.state = {
			checked: true
		}
		this.handlChange = this.handlChange.bind(this)
	}
	handlChange(checked){
		this.setState({checked})
	}
	render(){
		const { checked } = this.state;
		return(
			<Contenedor>
				<Container>
					
					<Header>
						<Reporte>
							<Button onClick={()=>{
								this.props.history.push("/enableRegistration")}}>
							<FontAwesomeIcon icon={faUserCheck}/> &nbsp;Habilitar
							
							</Button>					
						</Reporte>
						<Registro>
							<Button onClick={()=>{
								this.props.history.push("/disenable")}}>
								<FontAwesomeIcon icon={faUserLock}/> &nbsp; Historial
							</Button>					
						</Registro>
						<TableroBuscar>
							<Buscador type="text" placeholder ="Buscar Empleado"></Buscador>
							
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
									<th scope="col">Apellido</th>
									<th scope="col">CI</th>
									<th scope="col">Cargo</th>
									<th scope="col">Correo electrónico</th>
									<th scope="col">Nivel de usuario</th>
									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>aaa</td>
									<td>ddd</td>
									<td>1ddd</td>
									<td>1aws</td>
									<td>1das</td>
									<td>1df</td>
									<td>
										<Switch onChange={this.handlChange}
										checked={this.state.checked}>
											
										</Switch>
										<p>es {this.state.checked ? 'on' : 'off'}</p>
									</td>
										
								</tr>
								
							</tbody>
						</table>
					</ContenidoTable>
					
				</Container>
				
			</Contenedor>
			);
	}
}

export default withRouter(ViewUser);