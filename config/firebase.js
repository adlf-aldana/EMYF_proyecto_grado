const admin = require("firebase-admin");

const serviceAccount = require("./yanfan-7db64-firebase-adminsdk-bhhk3-df2c7aec9b.json");

const firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://yanfan-7db64-default-rtdb.firebaseio.com"
});

const firebaseDatabase = admin.database();


module.exports={ firebaseDatabase }