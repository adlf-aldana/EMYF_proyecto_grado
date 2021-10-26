import React, { Fragment, createRef, useState } from 'react'

import { 
	Button,
	InputEmail,
	MessageErrorContainer
	// InfoAccount
} from './../@styles/EmailLoginStyles';

import { 
	FontAwesomeIcon,
	faChevronCircleLeft,
	faCheck,
	faUserTie
} from './../../../themes/icons';

// events
import { 
	validateAccount,
	signInWithPassword,
	createAccountWithPassword
} from './../../../Events/LoginEvents';


const animationError = ( error )=> {

	error( true );
	
	setTimeout(()=>{
		error( false );
	}, 800);

}

const showMessageError = ( setErrorMessageActive, setErrorMessage, message )=>{
	
	setErrorMessageActive( true );
	setErrorMessage( message );

	setTimeout( ()=>{
		setErrorMessageActive( false );
		setErrorMessage( "" );		
	},5000);

}

const resetValue = ( { current } ) => {
	current.value = "";
}

const loginEmailEvent = ( email, password, setErrorLogin, setErrorMessageActive, setErrorMessage) => {
	const emailValue = email.current.value;
	const passwordValue = password.current.value;

	const validate = validateAccount( emailValue, passwordValue );

	if(validate){

		signInWithPassword(emailValue, passwordValue,state =>{

			if(!state){

				//resetValue( email );
				//resetValue( password );

				animationError( setErrorLogin );
				showMessageError( setErrorMessageActive, setErrorMessage, " Error, email y/o contraseña incorrecta. ");

			}

		});

	}else{

		resetValue( email );
		resetValue( password );

		animationError( setErrorLogin );
		showMessageError( setErrorMessageActive, setErrorMessage, "Error, verifica tus datos y vuelve a intentarlo.");
	}

}

const createAccountEvent = ( email, password, repeatPassword, setErrorLogin, setErrorCreateAccount, setErrorMessageActive, setErrorMessage ) => {
	const emailValue = email.current.value;
	const passwordValue = password.current.value;
	const repeatPasswordValue = repeatPassword.current.value;

	if(passwordValue === repeatPasswordValue){
		
		const validate = validateAccount( emailValue, passwordValue );

		if(validate){

			createAccountWithPassword(emailValue, passwordValue,state =>{

				if( !state ){

					resetValue( email );
					resetValue( password );
					resetValue( repeatPassword );

					animationError( setErrorLogin );
					animationError( setErrorCreateAccount );

					showMessageError( setErrorMessageActive, setErrorMessage, " Esta cuenta ya fue creada con anterioridad. ");
				}

			});

		}else{
			resetValue( repeatPassword );		

			animationError( setErrorLogin );
			
			showMessageError( setErrorMessageActive, setErrorMessage, " Error, verifica tus datos y vuelve a intentarlo. ");
		}
	}else{

		resetValue( repeatPassword );
		animationError( setErrorCreateAccount );

		showMessageError( setErrorMessageActive, setErrorMessage, " Error, contraseña incorrecta. ");

	}

}



export const EmailLogin = ({setOpenEmail}) =>{

	const [ createAccount, setCreateAccount ] = useState( false );

	const [ errorLogin, setErrorLogin ] = useState( false );
	const [ errorCreateAccount, setErrorCreateAccount ] = useState( false );

	const [ errorMessageActive, setErrorMessageActive ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( "" );


	const email = createRef();
	const password = createRef();
	const repeatPassword = createRef();

	return(
		<Fragment>

			<InputEmail 
				error={ errorLogin } 
				createAccount={createAccount} 
				ref = { email } placeholder="Email" 
				type="email"/>

			<InputEmail 
				error={ errorLogin } 
				ref = { password } 
				placeholder="Password" 
				type="password"/>

			{
				createAccount ? (

					<InputEmail 
						error={ errorCreateAccount } 
						ref = { repeatPassword } 
						placeholder="Repite tu password" 
						type="password"/>
				
				):null
			}

			{
				errorMessageActive ? (
					<MessageErrorContainer>
						{ errorMessage }
					</MessageErrorContainer>
				): null
			}

			<Button onClick = { ()=>{
				if( createAccount ){

					createAccountEvent( 
						email,
						password,
						repeatPassword,
						setErrorLogin,
						setErrorCreateAccount,

						setErrorMessageActive,
						setErrorMessage
					);

				}else{

					loginEmailEvent( 
						email,
						password,
						setErrorLogin,

						setErrorMessageActive,
						setErrorMessage
					);

				}
			} } colorIcon = "#5154ab" >

				<p>Confirmar</p>

				<span>
					<FontAwesomeIcon icon={ faCheck }/>	
				</span>
			
			</Button>
			{
				!createAccount?(
					<Button onClick = { ()=>{

						resetValue( email );
						resetValue( password );
						
						setCreateAccount(true);

					} } colorIcon = "#5154ab" >

						<p>Crear nueva cuenta</p>

						<span>
							<FontAwesomeIcon icon={ faUserTie }/>	
						</span>
					
					</Button>
				):null
			}
			<Button onClick = { ()=>{
				if( createAccount ){

					setCreateAccount(false);

				}else{

					setOpenEmail(false);

				}
	
			} } colorIcon = "#e17055" >
				<p>{ createAccount ? "Atras" : "Cancelar" }</p>

				<span>
					<FontAwesomeIcon icon={ faChevronCircleLeft }/>	
				</span>
			
			</Button>

			
		</Fragment>
	)
};