CREATE TABLE "jobs" (
	"id" serial PRIMARY KEY NOT NULL,
	"job_number" text NOT NULL,
	"date" text NOT NULL,
	"status" text NOT NULL,
	"client_id" integer,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "list_of_tests" (
	"id" serial PRIMARY KEY NOT NULL,
	"test_name" text NOT NULL,
	"unit" text,
	"method" text,
	"ideal_value" text
);
--> statement-breakpoint
CREATE TABLE "nsl" (
	"id" serial PRIMARY KEY NOT NULL,
	"nsl_number" text NOT NULL,
	"date" text NOT NULL,
	"status" text NOT NULL,
	"job_id" integer NOT NULL,
	"transformer_id" integer NOT NULL,
	"sample_type" text NOT NULL,
	"sample_date" text NOT NULL,
	"analyst_date" text NOT NULL,
	"report_date" text NOT NULL,
	"sample_point" text NOT NULL,
	"oil_temperature" text NOT NULL,
	"result" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transformers" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"status" text NOT NULL,
	"trans_sn" text,
	"trans_manufacturer" text,
	"trans_date" text,
	"trans_name" text,
	"trans_capacity" text,
	"trans_voltage" text,
	"trans_power" text
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_name" text NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"phone" text NOT NULL,
	"address" text NOT NULL,
	"role" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_client_id_users_id_fk" FOREIGN KEY ("client_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "nsl" ADD CONSTRAINT "nsl_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "nsl" ADD CONSTRAINT "nsl_transformer_id_transformers_id_fk" FOREIGN KEY ("transformer_id") REFERENCES "public"."transformers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transformers" ADD CONSTRAINT "transformers_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;