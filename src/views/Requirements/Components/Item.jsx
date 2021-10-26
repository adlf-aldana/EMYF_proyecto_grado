import {ContainerForm,
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
		} from './../@styles/ItemStyles';
import { withRouter } from 'react-router-dom';

import { 
	FontAwesomeIcon,
	faEye
 } from './../../../themes/icons.jsx';


import React, {Component} from 'react';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es')

class Item extends Component{

	render(){
		const { CODE, items, sentTime, articles } = this.props.data;

		const newDate = new Date(sentTime);
		const time = newDate.toLocaleTimeString();

		return(
			
			<ContainerForm>

				<ContainerRequirements>
					<ContainerInfo>
							
						<Info bold={true} isInfoSpecification={false}>
							Codigo de requerimiento:
						</Info>
							
						<Info bold={false} isInfoSpecification={true}>
							{CODE}
						</Info>

						<Info bold={true} isInfoSpecification={false}>
							Articulos:
						</Info>
							
						<Info bold={false} isInfoSpecification={true}>
							{articles.replaceAll(",",", ")}
						</Info>

					</ContainerInfo>

					<ContainerAmount>
						<ContainerInfoAmount>
							<InfoAmount> {items} </InfoAmount>
							<InfoUnit> Items </InfoUnit>
						</ContainerInfoAmount>
					</ContainerAmount>
				</ContainerRequirements>

				<Button onClick={()=>{
					console.log(this.props);
					this.props.history.push(`/requirements/${CODE}`);
				}}>
					<FontAwesomeIcon icon={ faEye }/>
					&nbsp;Revisar
				</Button>

				<ContainerDate>
					<InfDate isLeft={true} isInfDate={true}>
						{moment(sentTime).fromNow()}
					</InfDate>
					<InfDate isLeft={false} isInfDate={false}>
						{time}
					</InfDate>
				</ContainerDate>
			</ContainerForm>


		);
	}
}

export default withRouter(Item);