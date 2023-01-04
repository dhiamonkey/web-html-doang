exports.handler = function (event, context, callback) {
  // Get the value to increment from the request body
  const value = JSON.parse(event.body).value;

  // Increment the value by 1
  const incrementedValue = value + 1;

  // Return the incremented value in the response
  const response = {
    statusCode: 200,
    body: JSON.stringify({ value: incrementedValue }),
  };
  callback(null, response);
};
