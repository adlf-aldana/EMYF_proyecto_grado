import React,{Component} from 'react';

import {
	FontAwesomeIcon,

	faFileInvoiceDollar


} from './../../../themes/icons';

import { withRouter } from 'react-router-dom';

import {
	Container,
	ContainerPatronal,
	Button,
	Icon
} from './../@styles/planilla';

class Planilla extends Component{

	render() {
		return (
			
			<Container>
				<ContainerPatronal>
					<Icon>
						<FontAwesomeIcon icon={ faFileInvoiceDollar }/>
					</Icon>
					<Button onClick={()=>{
						
						this.props.history.push("/payroll");
					}}>
						 Planilla de sueldo
					</Button>
				</ContainerPatronal>
				<ContainerPatronal>
					<Icon>
						<FontAwesomeIcon icon={ faFileInvoiceDollar }/>
					</Icon>
					<Button onClick={()=>{
						
						this.props.history.push("/tributary");
					}}>Planilla tributaria
					</Button>
				</ContainerPatronal>
				<ContainerPatronal>
					<Icon>
						<FontAwesomeIcon icon={ faFileInvoiceDollar }/>
					</Icon>
					<Button onClick={()=>{
						
						this.props.history.push("/patronal");
					}}>Planilla de aporte patronal
					</Button>
				</ContainerPatronal>
			</Container>

		);
	}
}


export default withRouter(Planilla);