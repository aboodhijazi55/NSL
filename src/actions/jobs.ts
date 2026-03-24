"use server";

import { getDb } from "@/db";
import { jobs } from "@/db/schema";

export type CreateJobInput = {
  jobNumber: string;
  date: string;
  status: number;
  clientId?: number | null;
};

export async function createJob(input: CreateJobInput) {
  try {
    const statusText = input.status === 1 ? "completed" : "pending";

    const [row] = await getDb()
      .insert(jobs)
      .values({
        jobNumber: String(input.jobNumber).trim(),
        date: input.date,
        status: statusText,
        clientId:
          input.clientId != null && !Number.isNaN(input.clientId)
            ? input.clientId
            : null,
      })
      .returning();

    return { ok: true as const, job: row };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Database error";
    return { ok: false as const, error: message };
  }
}
