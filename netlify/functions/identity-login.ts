// why this function is not called by netlify dev
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface ClientContext {
  identity: { [key: string]: any };
  user: { [key: string]: any };
}

const handler: Handler = async function (
  event: HandlerEvent,
  context: HandlerContext
) {
  const clientContext = context.clientContext as ClientContext;
  const { identity, user } = clientContext;
  console.log("logging");
  console.log(identity, "<--- THIS IS identity");
  console.log(user, "<--- This is user");
  // Do stuff and return a response...
  return {
    statusCode: 200,
  };
};

export { handler };
