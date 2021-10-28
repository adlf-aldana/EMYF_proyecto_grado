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
	ContenidoTable,
	Button
} from './../../widgets/ReportInventory/@Styles/ReportInventory';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faSearch,
	faEye,
	faDownload
} from './../../themes/icons';

class ReportPayroll extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/generatetemplate');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> REPORTES </Title>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar reportes"></Buscador>
						
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
								<th colSpan="3" scope="col">Fecha</th>
								<th colSpan="6" scope="col">Descripción</th>
								<th scope="col">Ver</th>
								<th scope="col">Descargar</th>
								
							</tr>
						</thead>
						<tbody>
							
							<tr>
							
								<td >1</td>
								<td colSpan="3">27-09-2021</td>
								<td colSpan="6">Septiembre 2021</td>
								<td>
									<Button>
										<FontAwesomeIcon icon={faEye}/>
									</Button>
								</td>
								<td>
									<Button>
										<FontAwesomeIcon icon={faDownload}/>
									</Button>
								</td>
														
							</tr>
						</tbody>
					</table>
				</ContenidoTable>
			</Container>
	);
	}
}

export default withRouter( ReportPayroll );