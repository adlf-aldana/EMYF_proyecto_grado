import React, {Component} from 'react';
import {
	DeviceItem,
	NameDevice,
	CloseSession
} from './../@styles/ItemStyles'

class Item extends Component{
	render(){
		const {name,id}=this.props.data;

		return (
			<DeviceItem>
				<NameDevice isMyDevice={this.props.isMyDevice} dangerouslySetInnerHTML={{__html: name}}></NameDevice>
				<CloseSession onClick={()=>{
					this.props.closeSessionHandler(id, name);
				}}>Cerrar cesión</CloseSession>
			</DeviceItem>
		);
	}
}

export default Item;