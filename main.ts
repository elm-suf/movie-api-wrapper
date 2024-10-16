import "jsr:@std/dotenv/load";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import { Application } from "@oak/oak";
import router from "./router.ts";

const app = new Application();

const allowedOrigins = Deno.env.get("ALLOWED_ORIGINS");

app.use(
  oakCors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

console.log(`[CORS] allowed origins ${allowedOrigins}`);
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = Number(Deno.env.get("PORT")) || 8080;

app.listen({ port: PORT });
console.log(`listening on port ${PORT}`);
