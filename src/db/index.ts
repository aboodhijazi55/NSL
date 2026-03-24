import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

type Db = PostgresJsDatabase<typeof schema>;

const globalForDb = globalThis as typeof globalThis & { _db?: Db };

let cached: Db | undefined;

/** Call this when you run queries — throws only if `DATABASE_URL` is missing at runtime. */
export function getDb(): Db {
  if (cached) return cached;
  if (globalForDb._db) {
    cached = globalForDb._db;
    return cached;
  }

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set. Add it to your environment (e.g. .env.local)."
    );
  }
  const client = postgres(url, { max: 1 });
  const db = drizzle(client, { schema });
  cached = db;
  if (process.env.NODE_ENV !== "production") {
    globalForDb._db = db;
  }
  return db;
}

export type { Db };
