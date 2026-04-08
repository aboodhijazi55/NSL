"use server";

import { getDb } from "@/db";
import { users } from "@/db/schema";

export type CreateUserInput = {
  displayName: string;
  userName: string;
  userPassword: string;
  userPhone: string;
  userAddress: string;
  role: string;
};

function getDbErrorMessage(e: unknown): string {
  const cause =
    e instanceof Error && "cause" in e && e.cause != null ? e.cause : e;
  const pg = cause as Error & { code?: string };

  if (typeof pg.code === "string") {
    if (pg.code === "23505") {
      return "That username is already taken.";
    }
    if (pg.code === "42703") {
      return (
        'Database is missing column(s) (often `display_name`). ' +
        "Apply migrations from the project root: npm run db:migrate"
      );
    }
  }

  if (cause instanceof Error) {
    return cause.message;
  }
  if (e instanceof Error) {
    return e.message;
  }
  return "Database error";
}

export async function createUser(input: CreateUserInput) {
  try {
    const [row] = await getDb()
      .insert(users)
      .values({
        displayName: String(input.displayName).trim(),
        username: String(input.userName).trim(),
        password: String(input.userPassword),
        phone: String(input.userPhone).trim(),
        address: String(input.userAddress).trim(),
        role: String(input.role),
      })
      .returning();

    return { ok: true as const, user: row };
  } catch (e) {
    return { ok: false as const, error: getDbErrorMessage(e) };
  }
}
