/* Replace with your SQL commands */

CREATE TABLE public."art_item" 
(
	id serial primary key NOT NULL,
	user_id serial NOT NULL varying COLLATE pg_catalog."default",
	user_name character NOT NULL varying COLLATE pg_catalog."default",
	title character NOT NULL varying COLLATE pg_catalog."default",
	latitude character NOT NULL varying COLLATE pg_catalog."default",
	longitude character NOT NULL varying COLLATE pg_catalog."default",
	description character NOT NULL varying COLLATE pg_catalog."default",
	date DATE NOT NULL COLLATE pg_catalog."default",
	type character NOT NULL varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public."art_item"
    OWNER to hunterwebster;