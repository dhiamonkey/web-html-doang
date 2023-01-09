exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  // Do stuff and return a response...
  console.log(identity);
  console.log(user);
  const response = {
    statusCode: 200,
  };
  callback(null, response);
};
