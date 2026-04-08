import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

/** Example table — replace or extend with your real schema. */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  displayName: text("display_name").notNull(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  role: text("role").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  jobNumber: text("job_number").notNull(),
  date: text("date").notNull(),
  status: text("status").notNull(),
  clientId: integer("client_id").references(() => users.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

/** Belongs to a user (client); each user can own many transformers. */
export const transformers = pgTable("transformers", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  status: text("status").notNull(),
  transSN: text("trans_sn"),
  transManufacturer: text("trans_manufacturer"),
  transDate: text("trans_date"),
  transName: text("trans_name"),
  transCapacity: text("trans_capacity"),
  transVoltage: text("trans_voltage"),
  transPower: text("trans_power"),
});

export const nsl = pgTable("nsl", {
  id: serial("id").primaryKey(),
  nslNumber: text("nsl_number").notNull(),
  date: text("date").notNull(),
  status: text("status").notNull(),
  /** FK to `jobs.id` (not the human-readable `jobs.job_number` text). */
  jobId: integer("job_id").references(() => jobs.id).notNull(),
  /** Each NSL sample is tied to one transformer; a transformer has many NSLs. */
  transformerId: integer("transformer_id")
    .references(() => transformers.id)
    .notNull(),
  sampleType: text("sample_type").notNull(),
  sampleDate: text("sample_date").notNull(),
  analystDate: text("analyst_date").notNull(),
  reportDate: text("report_date").notNull(),
  samplePoint: text("sample_point").notNull(),
  oilTemperature: text("oil_temperature").notNull(),


  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
export const reportResult = pgTable("report_result", {
  id: serial("id").primaryKey(),
  nslId: integer("nsl_id").references(() => nsl.id).notNull(),
  testId: integer("test_id").references(() => listOfTests.id).notNull(),
  result: jsonb("result").$type<Record<string, unknown>>().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
export const listOfTests = pgTable("list_of_tests", {
  id: serial("id").primaryKey(),
  testName: text("test_name").notNull(),
  unit: text("unit"),
  method: text("method"),
  idealValue: text("ideal_value"),
});

/** Relational config for `db.query.*` — mirrors FKs above; no extra DB columns. */
export const usersRelations = relations(users, ({ many }) => ({
  jobs: many(jobs),
  transformers: many(transformers),
}));

export const jobsRelations = relations(jobs, ({ one, many }) => ({
  client: one(users, {
    fields: [jobs.clientId],
    references: [users.id],
  }),
  nslRecords: many(nsl),
}));

export const transformersRelations = relations(transformers, ({ one, many }) => ({
  user: one(users, {
    fields: [transformers.userId],
    references: [users.id],
  }),
  nslRecords: many(nsl),
}));

export const nslRelations = relations(nsl, ({ one }) => ({
  job: one(jobs, {
    fields: [nsl.jobId],
    references: [jobs.id],
  }),
  transformer: one(transformers, {
    fields: [nsl.transformerId],
    references: [transformers.id],
  }),
}));

export type User = InferSelectModel<typeof users>;
export type NewUser = InferInsertModel<typeof users>;
export type Job = InferSelectModel<typeof jobs>;
export type NewJob = InferInsertModel<typeof jobs>;
export type Nsl = InferSelectModel<typeof nsl>;
export type NewNsl = InferInsertModel<typeof nsl>;
export type Transformer = InferSelectModel<typeof transformers>;
export type NewTransformer = InferInsertModel<typeof transformers>;
export type ListOfTest = InferSelectModel<typeof listOfTests>;
export type NewListOfTest = InferInsertModel<typeof listOfTests>;
