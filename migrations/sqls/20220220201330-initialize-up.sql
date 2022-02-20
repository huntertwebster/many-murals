/* Replace with your SQL commands */

CREATE TABLE public."images" (
	id serial primary key NOT NULL,
    url character NOT NULL varying COLLATE pg_catalog."default",
    art_item_id serial NOT NULL varying COLLATE pg_catalog."default",
    featured_image boolean DEFAULT FALSE COLLATE pg_catalog."default"
);

TABLESPACE pg_default;

ALTER TABLE public."images"
    OWNER to hunterwebster;