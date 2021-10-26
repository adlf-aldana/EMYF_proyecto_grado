import React, {Component} from 'react';
import { Loading } from './../Loading';
import { withRouter,Redirect } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	Title,
	ContainerTable
} from './@styles/RequirementViewTableStyles';

import {
	FontAwesomeIcon,
	faChevronLeft,
} from './../../themes/icons';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

import { getRequirement } from './../../apiRest/requests';

class RequirementViewTable extends Component{
	state={
		isLoading: false,
		infoRequirements:[{
			sentTime:123123123,
			code:123123,
			name:"-",
			lastName:"-",
			nameArticle:"-",
			article:"-",
			sizeModel:"-",
			mark:"-",
			unit:"-",
			amount:12312,
			purpose:"-",
			deliveryTime:0 
		}]
	}

	constructor(props){
		super(props);
		this.match = this.props.match;
		this.history = this.props.history;
		this.table=React.createRef();
	}


	recoveryData = ()=>{
		const { key } = this.match.params;
		this.setState({
			isLoading: true,
		})

		getRequirement( key, ({data})=>{
			this.setState({
				isLoading: false,
				infoRequirements: data.data?data.data:[]
			});
		});

	}


	componentDidMount(){
		this.recoveryData();
	}

	

	render(){
		const { isLoading, infoRequirements } = this.state;
		let date=new Date();
		try{
			date = new Date(infoRequirements[0].sentTime?infoRequirements[0].sentTime:123456).toLocaleDateString();
		}catch(e){
			return (<Redirect to="/administrator/requirements"/>);
		}

		return isLoading?(
			<Loading/>
		):(
			<Container>
				<Header>
					<BackButton onClick={()=>{
						this.props.history.push('/administrator/requirements');
					}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title>
						Requerimiento {infoRequirements.[0].code||"error"}
					</Title>
					<ReactHTMLTableToExcel
	                    id="test-table-xls-button"
	                    className="download-table-xls-button"
	                    table="tabla"
	                    filename={`Requerimiento_${infoRequirements.[0].code}`}
	                    sheet={`Requerimiento_${infoRequirements.[0].code}`}
	                    buttonText="Descargar excel"/>
				</Header>


				<ContainerTable>
					
					<table border="2" id="tabla" ref={this.table} summary="Requerimiento de material">
						<thead>
							<tr>
								<th colSpan="5" scope="col">EMPRESA: EMPRESA MINERA YANG FANG S.A</th>
								<th colSpan="4" scope="col">FECHA {date}</th>
								<th colSpan="2" scope="col">codigo {infoRequirements[0].code}</th>								
							</tr>
							<tr>
								<th scope="col"></th>
								<th scope="col">Nombre de equipo</th>
								<th scope="col">Codigo</th>
								<th scope="col">Articulo</th>
								<th scope="col">Modelo o tamaño</th>
								<th scope="col">Marca</th>
								<th scope="col">Unidad</th>
								<th scope="col">Cantidad</th>
								<th scope="col">Proposito</th>
								<th scope="col">Tiempo de llega</th>
								<th scope="col">Observaciones</th>

							</tr>
						</thead>



						<tbody>
							{
								infoRequirements.map(({
									sentTime,
									code,
									name,
									lastName,
									nameArticle,
									article,
									sizeModel,
									mark,
									unit,
									amount,
									purpose,
									deliveryTime,
									observations
								},index)=>{
									return(
										<tr key={code + index}>
											<th scope="row">{index+1}</th>
											<td>{nameArticle}</td>
											<td>{code}</td>
											<td>{article}</td>
											<td>{sizeModel}</td>
											<td>{mark}</td>
											<td>{unit}</td>
											<td>{amount}</td>
											<td>{purpose}</td>
											<td>{deliveryTime} dias</td>
											<td>{observations}</td>
										</tr>
									)
								})
							}
							
							<tr>
								<th scope="row">{infoRequirements.length+1}</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<th scope="row">{infoRequirements.length+2}</th>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
		
							
						</tbody>




						<tfoot>
							<tr>
								<th colSpan="2" scope="col">Solicitante:</th>
								<td colSpan="2" >{`${infoRequirements[0].name} ${infoRequirements[0].lastName}`}</td>
								<th scope="col">Revisado por:</th>
								<th colSpan="3" scope="col"></th>
								<th scope="col">Aprobado por:</th>
								<th colSpan="2" scope="col"></th>
							</tr>
							<tr>
								<th colSpan="3" scope="col">Observaciónes del departamento tecnico y de proyectos.</th>
								<th colSpan="3" scope="col"></th>
								<th colSpan="2" scope="col">Observaciónes del departamento de comercialización:</th>
								<th colSpan="3" scope="col"></th>
							</tr>
							
						</tfoot>





					</table>

				</ContainerTable>
			

			</Container>
		)
	}
}

export default withRouter( RequirementViewTable );