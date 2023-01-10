// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHDMBPD5osuRMeeaPw7ZAZUcUSoKtf9-w",
  authDomain: "promising-haiku-356606.firebaseapp.com",
  projectId: "promising-haiku-356606",
  storageBucket: "promising-haiku-356606.appspot.com",
  messagingSenderId: "756974106029",
  appId: "1:756974106029:web:1f6f1f9307272db87cdd24",
  measurementId: "G-TP3LL90V6Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);

console.log("Connected to PlanetScale!");

exports.handler = function (event, context, callback) {
  // Get the value to increment from the request body
  const value = +JSON.parse(event.body).value;

  // Increment the value by 1
  const incrementedValue = value + 1;

  // Return the incremented value in the response
  const response = {
    statusCode: 200,
    body: JSON.stringify({ value: incrementedValue }),
  };
  callback(null, response);
};

// database: first_database
// username: 6dwmgmsbpa7wlw0vlm20
// host: ap-southeast.connect.psdb.cloud
// password: pscale_pw_GnqaAms8Kb4bk5wOduI2FlXTr0USODmZiDqGiYL1ESF

// mysql://6dwmgmsbpa7wlw0vlm20:pscale_pw_GnqaAms8Kb4bk5wOduI2FlXTr0USODmZiDqGiYL1ESF@ap-southeast.connect.psdb.cloud/first_database?ssl={"rejectUnauthorized":true}
