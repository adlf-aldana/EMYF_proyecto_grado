import {ContainerPersona,
		ContainerForm,
		ContainerRequirements,
		ContainerInfo,
		Info,
		ContainerAmount,
		InfoAmount,
		InfoUnit,
		Button,
		ContainerDate,
		InfDate,
		ContainerInfoAmount
		} from './../@styles/ItemPersonal';
import { withRouter } from 'react-router-dom';

import { 
	FontAwesomeIcon,
	faEye
 } from './../../../themes/icons';

import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es')


class ItemPersonal extends Component{

	render(){
		
		
		return(
		<ContainerPersona>	
			<ContainerForm>

				<ContainerRequirements>
					<ContainerInfo>
						<Info bold={true} isInfoSpecification={false}>
							Codigo de requerimiento:
						</Info>
							
						<Info bold={false} isInfoSpecification={true}>
							CODE
						</Info>

						<Info bold={true} isInfoSpecification={false}>
							Competencia Requerida:
						</Info>
							
						<Info bold={false} isInfoSpecification={true}>
							skills
						</Info>
					</ContainerInfo>

					<ContainerAmount>
						<ContainerInfoAmount>
							<InfoAmount>3</InfoAmount>
							<InfoUnit>Cantidad</InfoUnit>
						</ContainerInfoAmount>
					</ContainerAmount>
				</ContainerRequirements>

				<Button onClick={()=>{
					console.log(this.props);
					this.props.history.push(`/requirimentPersonal`);
				}}>
					<FontAwesomeIcon icon={ faEye }/>
					&nbsp;Revisar
				</Button>

				<ContainerDate>
					<InfDate isLeft={false} isInfDate={false}>
						
					</InfDate>
				</ContainerDate>
			</ContainerForm>
		</ContainerPersona>

		);
	}
}

export default withRouter(ItemPersonal);