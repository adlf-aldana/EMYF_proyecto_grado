import { firebaseConfig } from './index';

import app from 'firebase/app';
import "firebase/database";
import "firebase/auth";

const firebase = app.initializeApp(firebaseConfig);
const database = firebase.database();


const modulesFirebase = { 
							app, 
							firebase,
							database 
						}

export default modulesFirebase;
