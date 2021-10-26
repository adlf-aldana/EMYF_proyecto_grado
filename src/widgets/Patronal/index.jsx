import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import {
	Container,
	Header,
	BackButton,
	NewButton,
	ReportButton,
	Title
} from './../Payroll/@styles/payroll';

import {
	FontAwesomeIcon,
	faChevronLeft,
	faPlus,
	faFolderOpen
} from './../../themes/icons';

class PlanillaPatronal extends Component{
	render() {

		return(

			<Container>
				<Header>
					<BackButton onClick={()=>{
							this.props.history.push('/administrator/generatetemplate');
						}}>
						<FontAwesomeIcon icon={faChevronLeft}/>
					</BackButton>
					<Title> PLANILLA APORTE PATRONAL</Title>
					<NewButton>
					<FontAwesomeIcon icon={faPlus}/> &nbsp;Crear
					</NewButton>
					<ReportButton>
					<FontAwesomeIcon icon={faFolderOpen}/> &nbsp;Reportes
					</ReportButton>
				</Header>
			</Container>
	);
	}
}
export default withRouter( PlanillaPatronal );