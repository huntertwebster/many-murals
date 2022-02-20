/* Replace with your SQL commands */
-- Table: public.user

-- DROP TABLE public."users";


CREATE TABLE public."user" 
(
    id serial primary key, 
    name character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    email_address character varying COLLATE pg_catalog."default",
    type character varying COLLATE pg_catalog."default",
    username character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default",
    profile_image character varying COLLATE pg_catalog."default",
    phone_number character varying COLLATE pg_catalog."default"
)



TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to hunterwebster;

