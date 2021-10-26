import React,{Component} from 'react';
import { withRouter } from 'react-router-dom';

import { Container,
		Buscar,
		TableroBuscar,
		IconBuscar,
		Buscador,
		ContenidoTable
} from './../@styles/employees';


import {
	FontAwesomeIcon,
	faSearch
} from './../../../themes/icons';

import { getListEmployees } from './../../../apiRest/requests';

class ViewEmployees extends Component{
	state={
		listEmployees:[{
			name:"-",
			lastName:"-",
			ci:"-",
			cargo:"-",
		}]
	}
	constructor(props){
		super(props);
		this.match = this.props.match;
		this.history = this.props.history;
		this.table=React.createRef();
	}
	recoveryData = ()=>{
		getListEmployees(({data})=>{
			console.log(data.data);
			this.setState({
				listEmployees: data.data?data.data:[]
			});
		});
	}
	componentDidMount(){
		this.recoveryData();
	}
	render(){
		const { listEmployees } = this.state;
		console.log(this.props);		

		return (
			<Container>
				
				<Buscar>
					<TableroBuscar>
					
						<Buscador type="text" placeholder ="Buscar Empleado"></Buscador>
						
						<IconBuscar>
							<FontAwesomeIcon icon={faSearch}/>
						</IconBuscar>
						
					</TableroBuscar>
				</Buscar>
				<ContenidoTable>
					<table>
						<thead>
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre</th>
								<th scope="col">Apellido</th>
								<th scope="col">CI</th>
								<th scope="col">Cargo</th>
								
							</tr>
						
						</thead>
						<tbody>
						{
						listEmployees.map(({
							name,
							lastName,
							ci,
							cargo
						}, index)=>{
							return(
								<tr key={index}> 
									<td >{index+1}</td>
									<td>{name}</td>
									<td>{lastName}</td>
									<td>{ci}</td>
									<td>{cargo}</td>
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
export default withRouter(ViewEmployees);