import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';


import {
	Container,
	Header,
	BackButton,
	DownloadButton,
	Title,
	ContenidoTable,
	ContenidoTableSecundar
} from './@Styles/generate';
import {
	FontAwesomeIcon,
	faChevronLeft,
	faDownload
} from './../../themes/icons';

import { getListIncome, 
		getListEgress,
		getListMaterial } from './../../apiRest/requests';


class Generate extends Component{
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
		}],
		listIngreso:[{
			name:"-",
			priceUnit:"-",
			acquisitionDate:"-",
			incomeAmount:"-",
			priceIncome:"-"
		}],
		listEgreso:[{
			name:"-",
			priceUnit:"-",
			departureDate:"-",
			amountEgress:"-",
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

		getListIncome(({data})=>{
			console.log(data.data);
			this.setState({
				listIngreso: data.data?data.data:[]
			});
		});

		getListEgress(({data})=>{
			console.log(data.data);
			this.setState({
				listEgreso: data.data?data.data:[]
			});
		});

	}

	componentDidMount(){
		this.recoveryData();
	}

	render() {
		const { listIngreso, listEgreso, listMaterial } = this.state;
		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('administrator/inventory');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> DESCARGAR REPORTE</Title>
					<DownloadButton>
						<FontAwesomeIcon icon={faDownload}/> &nbsp; Descargar
					</DownloadButton>
				</Header>

				<ContenidoTable>
					<table>

						<thead>
							<tr>
								<th colSpan="13" scope="col">REPORTE GENERAL</th>
							</tr>
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

				<ContenidoTableSecundar>
					<table>
						<thead>
							<tr>
								<th colSpan="6" scope="col">REPORTE INGRESOS</th>
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre</th>
								<th scope="col">Precio unitario</th>
								<th scope="col">Fecha de adquisión</th>
								<th scope="col">Cantidad Ingreso</th>
								<th scope="col">Monto ingreso</th>
								
							</tr>
						
						</thead>
						<tbody>
						{
						listIngreso.map(({
							name,
							priceUnit,
							acquisitionDate,
							incomeAmount,
							priceIncome
						}, index)=>{
							return(
								<tr key={index}>
								
									<td >{index+1}</td>
									<td>{name}</td>
									<td>{priceUnit}</td>
									<td>{acquisitionDate}</td>
									<td>{incomeAmount}</td>
									<td>{priceIncome}</td>								
								</tr>
								)
							})
						}
						</tbody>
					</table>							
				</ContenidoTableSecundar>


				<ContenidoTableSecundar>
					<table>
						<thead>
							<tr>
								<th colSpan="6" scope="col">REPORTE INGRESOS</th>
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre</th>
								<th scope="col">Precio unitario</th>
								<th scope="col">Fecha de retiro</th>
								<th scope="col">Cantidad Egreso</th>
								<th scope="col">Monto egreso</th>
								
							</tr>
						
						</thead>
						<tbody>
						{
						listEgreso.map(({
							name,
							priceUnit,
							departureDate,
							amountEgress,
							priceEgress
						}, index)=>{
							return(
								<tr key={index}>
									<td >{index+1}</td>
									<td>{name}</td>
									<td>{priceUnit}</td>
									<td>{departureDate}</td>
									<td>{amountEgress}</td>
									<td>{priceEgress}</td>								
								</tr>
								)
							})
						}						
						</tbody>
					</table>							
				</ContenidoTableSecundar>
			</Container>
	);
	}
}

export default withRouter( Generate );


