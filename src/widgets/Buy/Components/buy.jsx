import React, { Component } from "react";
import { withRouter } from "react-router-dom";


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
} from './../../ReportInventory/@Styles/ReportInventory';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faEye,
	faDownload,
	faSearch
} from './../../../themes/icons';

class BuyList extends Component{
	render(){
		return(
			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/registration');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> COMPRAS</Title>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar compra"></Buscador>
						
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
								<th scope="col">Fecha</th>
								<th scope="col">Proveedor</th>
								<th scope="col">Descripción</th>
								<th scope="col">Ver</th>
								<th scope="col">Descargar</th>
								
							</tr>
						</thead>
						<tbody>
							
							<tr>
							
								<td >1</td>
								<td>27-09-2021</td>
								<td>Calmar S.A.</td>
								<td>pala, martillo</td>
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
export default withRouter(BuyList);