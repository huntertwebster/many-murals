
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);


-- imported SQL from DBdesigner

CREATE TABLE "public.User" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL UNIQUE,
	"email_address" varchar(255) NOT NULL UNIQUE,
	"type" varchar(255) NOT NULL,
	"username" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"phone_number" integer(255) NOT NULL UNIQUE,
	"profile_image" varchar(255) NOT NULL,
	CONSTRAINT "User_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.art_item" (
	"id" integer NOT NULL,
	"user_id" serial NOT NULL UNIQUE,
	"title" varchar(255) NOT NULL,
	"location" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"date" DATE NOT NULL,
	"image_id" integer NOT NULL,
	"type" varchar(255) NOT NULL,
	CONSTRAINT "art_item_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.image" (
	"id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"art_item_id" integer NOT NULL,
	"featured_image" BOOLEAN NOT NULL,
	CONSTRAINT "image_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "art_item" ADD CONSTRAINT "art_item_fk0" FOREIGN KEY ("user_id") REFERENCES "User"("id");

ALTER TABLE "image" ADD CONSTRAINT "image_fk0" FOREIGN KEY ("art_item_id") REFERENCES "art_item"("id");



