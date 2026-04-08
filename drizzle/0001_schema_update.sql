ALTER TABLE "users" RENAME COLUMN "company_name" TO "display_name";
--> statement-breakpoint
CREATE TABLE "report_result" (
	"id" serial PRIMARY KEY NOT NULL,
	"nsl_id" integer NOT NULL,
	"test_id" integer NOT NULL,
	"result" jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "report_result" ADD CONSTRAINT "report_result_nsl_id_nsl_id_fk" FOREIGN KEY ("nsl_id") REFERENCES "public"."nsl"("id") ON DELETE no action ON UPDATE no action;
--> statement-breakpoint
ALTER TABLE "report_result" ADD CONSTRAINT "report_result_test_id_list_of_tests_id_fk" FOREIGN KEY ("test_id") REFERENCES "public"."list_of_tests"("id") ON DELETE no action ON UPDATE no action;
--> statement-breakpoint
ALTER TABLE "nsl" DROP COLUMN "result";
