import { Context, Router } from "@oak/oak";
import { getResult } from "./handlers/getSearchResult.ts";
import type { Movie, SearchInput } from "./models/models.ts";
import { getQuery } from "./helpers/index.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});

router.get("/api/search/movie", async (ctx: Context) => {
  const query = getQuery(ctx);
  ctx.response.body = await getResult<Movie>(query as unknown as SearchInput);
});


export default router;
