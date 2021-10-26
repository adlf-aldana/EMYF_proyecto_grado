import React, { Component, Fragment} from 'react';

import {
	FontAwesomeIcon,
	faBell
} from './../../../themes/icons';

import {
	NotificationContainer
} from './../@styles/NotificationsStyles';

import NotificationModal from './NotificationModal';

import soundNotification from './../../../sources/sounds/ding.mp3';

import fire from './../../../config/firebase';

class Notifications extends Component{


	state = {
		activeModal: false,
		newNotification: true,
		numberNotifications: 0
	}

	constructor(props){
		super(props);
		this.notificationObserver=()=>{};
	}

	activeModal = ()=>{
		this.setState({
			activeModal: !this.state.activeModal
		});
	}

	activeNewNotification = ()=>{
		this.setState({
			newNotification: !this.state.newNotification
		});
	}

	loadSound = async source=> {
	    const sound = document.createElement("audio");
	    sound.src = source;
	    sound.setAttribute("preload", "auto");
	    sound.setAttribute("controls", "none");
	    sound.style.display = "none";
	    document.body.appendChild(sound);
	    return sound;
	};


	playNotificationSound= async( newNumber)=>{
		if( newNumber > this.state.numberNotifications ){
			const sound = await this.loadSound( soundNotification );
			sound.play();
			
			setTimeout(()=>{
				sound.remove();
			},1700);

		}
		this.setState({
			numberNotifications:newNumber
		});
	}

	observeNewNotification=()=>{
		const { idEmployee, titlePage } = JSON.parse( localStorage.session );

		this.notificationObserver = fire.database.ref("employees").child( idEmployee ).child("notifications").orderByChild("viewed").equalTo(false).on("value",(snapshot)=>{
										try{
											let newNumber = Object.keys(snapshot.val()||{}).length;
											document.title=newNumber!==0 ? `${"("+newNumber+")"} ${titlePage}` : titlePage;
									
											this.playNotificationSound(newNumber);
									
											this.setState({
												newNotification: newNumber!==0
											});

										}catch(e){
											// console.log("xD4.");
										}

									});
	}

	componentWillUnmount() {
		this.notificationObserver();
	}

	componentDidMount(){
		this.observeNewNotification();
	}

	render(){
		return (
			<Fragment>
				<NotificationContainer active = { this.state.newNotification }>
					<FontAwesomeIcon icon={ faBell } onClick={ ()=>{
						this.activeModal();
					}}/>
				</NotificationContainer>
				{
					this.state.activeModal ? (<NotificationModal activeNewNotification={this.activeNewNotification} activeModal={this.activeModal} loadDataOptions={this.props.loadDataOptions}/>) : null
				}
			</Fragment>
		)
	}
}

export default Notifications;