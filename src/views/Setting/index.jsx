import React,{Component} from 'react';
import {
	Container,
	ContainerSetting,
	Title
} from './@styles/SettingStyles';

import {
	FontAwesomeIcon,
	faCog
} from './../../themes/icons';

//devices
import Devices from './Components/Devices';

///test

// import swal from 'sweetalert';


class Setting extends Component{
	// componentDidMount(){
	// 	swal("Good job!", "You clicked the button!", "error");
	// }

	render(){
		return (
			<Container>
				<ContainerSetting>

					<Title>
						<FontAwesomeIcon icon={faCog}/>
						&nbsp; Configuración
					</Title>

					<Devices/>
					
					
				
				</ContainerSetting>
			</Container>
		);
	}
}

export default Setting;