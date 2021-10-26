const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const nodemailer = require('nodemailer');
app.use(bodyParser.json());

const { authToken } = require('./../../../middelwares/middelware');

const { firebaseDatabase } = require('./../../../config/firebase');



app.post("/sendCode",authToken, (req,res) => {
	const {id,name,mail} = req.body;
	const timeStampNow = (+new Date);
	console.log({id,name,mail});

	const code = Math.floor((timeStampNow/1000000)%1*1000000);

	const exp = new Date(timeStampNow);

	exp.setMinutes(exp.getMinutes() + 15);

	const timeStampExp = +exp;

	// console.log(code,exp);

	firebaseDatabase.ref('employees').child(id).child('verification').update({
		code,
		validate:timeStampExp
	});



	const dateString = `${exp.toLocaleDateString()} con hora ${exp.toLocaleTimeString()}`;

	// console.log(dateString);

	sendMessage(name,mail,code,dateString);
	
	res.json({
		status:"ok"
	});

});





const htmlMessage=(name,code,dateTime)=>`
	<h1>Hola ${name}, tu código de verificación es:</h1><br/>
	<h1 style="font-size: 50px; color: #0984e3;">${code}</h1>

	<p>Este código es válido hasta la  <strong>fecha ${dateTime}</strong>.</p>
	<p>Recuerda no compartir este código con ninguna persona.</p>

	<h2>Este código debe ser introducido en la opción configuración/código verificación</h2>
	<img src="http://pxndxkir.heliohost.us/instruccion.PNG"/>

	<p>Una vez introducido el código presiona el botón confirmar, si el código es correcto podrás cerrar la cesión de otros dispositivos.</p>

`;





const sendMessage = (name,mail,code,dateTime)=>{
	var transporter = nodemailer.createTransport({
	 service: 'hotmail',
	 auth: {
	        user: 'asistente.emyf@hotmail.com',
	        pass: 'Error404'
	    }
	});

	var mailOptions = {
	  from: '"Asistente E.M.Y.F" <asistente.emyf@hotmail.com>',
	  to: mail,
	  subject: 'CODIGO DE VERIFICACION:',
	  html: htmlMessage(name,code,dateTime)
	};

	transporter.sendMail(mailOptions, function (err, info) {
	   if(err)
	     console.log(err)
	   // else
	   //   console.log(info);
	});
}





exports.verifyCode = app;