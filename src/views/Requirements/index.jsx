import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Item from './Components/Item';
import { Container,
	Header,
	ButtonNew,
	ContainerItem,
	Loading,
	ContainerRequirements,
	Button,
	ContainerDate,
	Info
} from './@styles/RequirementsStyles';

import { 
	FontAwesomeIcon,
	faPlus
 } from './../../themes/icons';


import { getListCodeRequirements } from './../../apiRest/requests';

class Requirements extends Component{

	state={
		listRequirements:[],
		loading:false
	}

	recoveryData = ()=>{
		this.setState({
			loading:true
		})
		getListCodeRequirements(({data})=>{
			this.setState({
				listRequirements:data.data,
				loading:false
			})
		});
	}
	
	componentDidMount(){
		this.recoveryData();
	}

	render(){
		const { listRequirements, loading } = this.state;

		// console.log(listRequirements, loading);
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
						this.props.history.push("/newRequirementM");
					}}>
						<FontAwesomeIcon icon={ faPlus }/>&nbsp;Nuevo
					</ButtonNew>
				</Header>
				<ContainerItem>	
							
					{
						loading ? LoadingCard : listRequirements.map(_data=>{
							return(
								<Item key={_data.CODE} data={{..._data}}/>
							)
						})
					}
				</ContainerItem>
			</Container>
		);
	}
}

export default withRouter( Requirements );

