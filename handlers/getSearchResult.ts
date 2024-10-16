import { appendParams } from "../helpers/append-params.ts";
import { log } from "../util/logger.ts";
import type { Search, SearchInput } from "../models/models.ts";

export async function getResult<T>(query: SearchInput): Promise<Search<T>> {
  log(`[getResult]`, query);

  try {
    if (!query) {
      throw new Error("Missing parameter `query`");
    }

    const url = new URL("https://api.themoviedb.org/3/search/movie");
    // url.searchParams.append("query", query);

    appendParams(url.searchParams, query);

    const TOKEN = Deno.env.get("TMDB_API_TOKEN");
    if (!TOKEN) {
      throw new Error("Missing parameter `TOKEN` .env");
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    log(`[getResult][fetch]`, response.url);

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
    }

    const json = (await response.json()) as Search<T>;
    log(`[getResult][response]`, response.status);
    return json;
  } catch (error) {
    log(`[getResult][Error]`, error);
    throw error;
  }
}
