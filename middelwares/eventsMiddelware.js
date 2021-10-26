const { listHeaders } = require('./../config/listHeaders');
const { listHosting } = require('./../config/listHosting');

const isCorrectHeaders = ( headers ) =>{

	let status = listHeaders.some( ({ header, value},index) => {
		if ( headers[header] !== undefined ){
			if ( headers[header] !== value ) return false
		}else return false

		if( listHeaders.length-1 === index ) return true;
	});

	return status;
}



module.exports = { isCorrectHeaders };