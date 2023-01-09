// identity-signup.ts
import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

interface ClientContext {
  identity: { [key: string]: any };
  user: { [key: string]: any };
}

const handler: Handler = async function (
  event: HandlerEvent,
  context: HandlerContext
) {
  const { identity, user } = context.clientContext as ClientContext;
  console.log("===============logging-identity-signup===============");

  console.log("\ncontext\n");
  console.log(context);

  console.log("\nevent\n");
  console.log(event);

  return {
    statusCode: 200,
  };
};

export { handler };
