--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: art_item; Type: TABLE; Schema: public; Owner: hunterwebster
--

CREATE TABLE public.art_item (
    id integer NOT NULL,
    user_id integer NOT NULL,
    user_name character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    latitude numeric(9,6) NOT NULL,
    longitude numeric(9,6) NOT NULL,
    description character varying(255) NOT NULL,
    date date NOT NULL,
    type character varying(255) DEFAULT 'mural'::character varying NOT NULL
);


ALTER TABLE public.art_item OWNER TO hunterwebster;

--
-- Name: art_item_id_seq; Type: SEQUENCE; Schema: public; Owner: hunterwebster
--

CREATE SEQUENCE public.art_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.art_item_id_seq OWNER TO hunterwebster;

--
-- Name: art_item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hunterwebster
--

ALTER SEQUENCE public.art_item_id_seq OWNED BY public.art_item.id;


--
-- Name: art_item_user_id_seq; Type: SEQUENCE; Schema: public; Owner: hunterwebster
--

CREATE SEQUENCE public.art_item_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.art_item_user_id_seq OWNER TO hunterwebster;

--
-- Name: art_item_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hunterwebster
--

ALTER SEQUENCE public.art_item_user_id_seq OWNED BY public.art_item.user_id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: hunterwebster
--

CREATE TABLE public.images (
    id integer NOT NULL,
    url character varying(9000) NOT NULL,
    art_item_id integer NOT NULL,
    featured_image boolean DEFAULT false NOT NULL
);


ALTER TABLE public.images OWNER TO hunterwebster;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: hunterwebster
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.images_id_seq OWNER TO hunterwebster;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hunterwebster
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: hunterwebster
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    name character varying(255),
    description character varying(5000),
    email_address character varying(255),
    type character varying(255) DEFAULT 'artist'::character varying,
    username character varying(255),
    password character varying(255),
    profile_image character varying(5000),
    phone_number character varying(255)
);


ALTER TABLE public."user" OWNER TO hunterwebster;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: hunterwebster
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO hunterwebster;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: hunterwebster
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: art_item id; Type: DEFAULT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.art_item ALTER COLUMN id SET DEFAULT nextval('public.art_item_id_seq'::regclass);


--
-- Name: art_item user_id; Type: DEFAULT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.art_item ALTER COLUMN user_id SET DEFAULT nextval('public.art_item_user_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Data for Name: art_item; Type: TABLE DATA; Schema: public; Owner: hunterwebster
--

COPY public.art_item (id, user_id, user_name, title, latitude, longitude, description, date, type) FROM stdin;
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: hunterwebster
--

COPY public.images (id, url, art_item_id, featured_image) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: hunterwebster
--

COPY public."user" (id, name, description, email_address, type, username, password, profile_image, phone_number) FROM stdin;
5	Jake Billiou	Jake is a midwestern artist, hailing from Ashley, ND and is currently creating in the hills of South Dakota	jakeb@gmail.com	artist	jake	$2a$10$ByEdRc1n.Os3c64GjU0UnexChMkvMMroycLlPdHLxn0tExBoYKcHG	https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500	7918833384
6	Maci Cherry	Maci is an artist from Hawaii and she loves to create murals using charcoal and finds herself in Fargo because she loves the scene and her sister lives here!	maciwindu@yahoo.com	artist	maci	$2a$10$DPXUrWeJXXGxI9VFELCle.TrVMkq8ikAnOLyRkxDUTsmM0/V2mYCq	https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg	1123992093
7	Orry Ayo	Orry loves the outdoors and loves to paint it even more!	orryayo@gmail.com	artist	orry	$2a$10$J/k/5SDuRniuMHToDthiUePjekTq17HsU/U.xXiaYsdauTatmtGd6	https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhbmlzaCUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80	1049103910
8	Steven Jesh	Steven is a passionate mural artist born in Fargo ND with a desire to "paint the city" as he said in an interview with the Fargo Forum	jeshSteven@gmail.com	artist	steven	$2a$10$XdGfO/zy5N.sZEuslzM8I.YK9IKh4ZDN2N/FUNO1mExR2sKop1TFm	https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=	791-223-3392
\.


--
-- Name: art_item_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hunterwebster
--

SELECT pg_catalog.setval('public.art_item_id_seq', 1, false);


--
-- Name: art_item_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hunterwebster
--

SELECT pg_catalog.setval('public.art_item_user_id_seq', 1, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hunterwebster
--

SELECT pg_catalog.setval('public.images_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: hunterwebster
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- Name: art_item art_item_pkey; Type: CONSTRAINT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.art_item
    ADD CONSTRAINT art_item_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: art_item art_item_fk0; Type: FK CONSTRAINT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.art_item
    ADD CONSTRAINT art_item_fk0 FOREIGN KEY (user_id) REFERENCES public."user"(id) ON DELETE CASCADE;


--
-- Name: images images_fk0; Type: FK CONSTRAINT; Schema: public; Owner: hunterwebster
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_fk0 FOREIGN KEY (art_item_id) REFERENCES public.art_item(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

