import React, { Component } from "react";
import { withRouter } from "react-router-dom";


import {
	Container,
	Header,
	NewButton,
	NewReport,
	Reporte,
	Buscar,
	TableroBuscar,
	IconBuscar,
	Buscador,
	ContenidoTable,
} from "./../@Styles/inventory";

import {
	FontAwesomeIcon,
	faPlus,
	faFolderOpen,
	faFolderPlus,
	faSearch,
} from "./../../../themes/icons";

import { getListMaterial } from './../../../apiRest/requests';

class Inventario extends Component {
	state={
		listMaterial:[{
			name:"-",
			model:"-",
			unit:"-",
			minimumAmount:"-",
			amount:"-",
			priceUnit:"-",
			priceTotal:"-",
			incomeAmount:"-",
			amountEgress:"-",
			balance:"-",
			priceIncome:"-",
			priceEgress:"-"
		}]
	}
	constructor(props){
		super(props);
		this.match = this.props.match;
		this.history = this.props.history;
		this.table=React.createRef();
	}
	recoveryData = ()=>{
		getListMaterial(({data})=>{
			console.log(data.data);
			this.setState({
				listMaterial: data.data?data.data:[]
			});
		});
	}
	componentDidMount(){
		this.recoveryData();
	}
	render() {
		const { listMaterial } = this.state;
		console.log(this.props);
		return (
			<Container>
				<Header>
					<NewButton onClick={()=>{
							this.props.history.push('/incomeEgress');}}>
						<FontAwesomeIcon icon={faPlus} />
						&nbsp;Registro
					</NewButton>

					<NewReport onClick={()=>{
							this.props.history.push('/generateReport');}}>
						<icon>
						<FontAwesomeIcon icon={faFolderPlus}/> 
						</icon>Nuevo Reporte
					</NewReport>
					<Reporte onClick={()=>{
							this.props.history.push('/reportsInventory');}}>

						<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes

					</Reporte>
				
				</Header>
					

				<Buscar>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar material"></Buscador>
						
						<IconBuscar>
							<FontAwesomeIcon icon={faSearch} />
						</IconBuscar>
						
					</TableroBuscar>
				</Buscar>
				<ContenidoTable>
					<table>

						<thead>
							
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre</th>
								<th scope="col">Modelo</th>
								<th scope="col">Unidad</th>
								<th scope="col">Cantidad Mínima</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Precio unitario</th>
								<th scope="col">Precio Total</th>
								<th scope="col">Cantidad Ingreso</th>
								<th scope="col">Cantidad Egreso</th>
								<th scope="col">Cantidad Saldo</th>
								<th scope="col">Monto Ingreso</th>
								<th scope="col">Monto Egreso</th>
							</tr>
						</thead>
						<tbody>
						{
						listMaterial.map(({
							name,
							model,
							unit,
							minimumAmount,
							amount,
							priceUnit,
							priceTotal,
							incomeAmount,
							amountEgress,
							balance,
							priceIncome,
							priceEgress
						}, index)=>{
							return(
								<tr key={index}>
									<td >{index+1}</td>
									<td>{name}</td>
									<td>{model}</td>
									<td>{unit}</td>
									<td>{minimumAmount}</td>
									<td>{amount}</td>
									<td>{priceUnit}</td>
									<td>{priceTotal}</td>
									<td>{incomeAmount}</td>
									<td>{amountEgress}</td>
									<td>{balance}</td>
									<td>{priceIncome}</td>
									<td>{priceEgress}</td>								
								</tr>
								)
							})
						}
						</tbody>
					</table>
				</ContenidoTable>
			</Container>
		);
	}
}
export default withRouter(Inventario);
