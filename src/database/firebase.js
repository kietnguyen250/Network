import * as firebase from 'firebase';
var dataConfig = {     
	apiKey :"AIzaSyA3Xm9akGCnF2N5a_RA4Gs9_MN_xLMMxAA" , 
    authDomain : "reactnative-d1fa0.firebaseapp.com" ,
    databaseURL: 'https://reactnative-d1fa0-default-rtdb.firebaseio.com/',
	projectId : "reactnative-d1fa0" ,
	storageBucket : "reactnative-d1fa0.appspot.com" ,
	messagingSenderId : "42565296349" ,
	appId : "1: 42,565,296,349: Web : d638ce1323c7e8b7293b34 " ,
    measurementId : " G-9BHJ50HT82 " };
    
export default (firebaseConfig = firebase.initializeApp(dataConfig));