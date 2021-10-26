import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemPersonal from './Components/ItemPersonal';

import { Container,
	Header,
	ButtonNew,
	ContainerItem,
	Loading,
	ContainerRequirements,
	Button,
	ContainerDate,
	Info
} from './../Requirements/@styles/RequirementsStyles';

import { 
	FontAwesomeIcon,
	faPlus
 } from './../../themes/icons';

import { getListCodeRequiEmployees } from './../../apiRest/requests';

class RequirementsPer extends Component{
	state={
		listRequirementsE:[],
		loading:false
	}

	recoveryData = ()=>{
		this.setState({
			loading:true
		})
		getListCodeRequiEmployees(({data})=>{
			this.setState({
				listRequirementsE:data.data,
				loading:false
			})
		});
	}
	componentDidMount(){
		this.recoveryData();
	}
	render(){
		const { listRequirementsE, loading } = this.state;
		const LoadingCard =(
			<Loading>
				
				<ContainerRequirements>
					<Info/>
					<Info/>
				</ContainerRequirements>
				<Button/>
				<ContainerDate/>
			</Loading>
		);
		return (

			<Container>
				<Header>
					<ButtonNew onClick={()=>{
						this.props.history.push("/newRequirementP");
					}}>
						<FontAwesomeIcon icon={ faPlus }/>&nbsp;Nuevo
					</ButtonNew>
				</Header>
				<ContainerItem>	
							
					{
						loading ? LoadingCard : listRequirementsE.map(_data=>{
							return(
								<ItemPersonal key={_data.CODE} data={{..._data}}/>
							)
						})
					}
				</ContainerItem>
			</Container>
				
			
		);
	}
}

export default withRouter( RequirementsPer );
