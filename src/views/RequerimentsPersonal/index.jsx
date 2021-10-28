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



class RequirementsPer extends Component{
	
	render(){
		
			
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
							
					
								<ItemPersonal/>
							
				</ContainerItem>
			</Container>
				
			
		);
	}
}

export default withRouter( RequirementsPer );
