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
