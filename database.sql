CREATE TABLE "user" (
	"id" serial PRIMARY KEY ,
	"name" varchar(255) ,
	"description" varchar(255),
	"email_address" varchar(255),
	"type" varchar(255),
	"username" varchar(255) ,
	"password" varchar(255) ,
	"phone_number" numeric(10,0) ,
	"profile_image" varchar(5000) 
);


CREATE TABLE "art_item" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" serial NOT NULL,
	"user_name" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"latitude" numeric(9,6) NOT NULL,
	"longitude" numeric(9,6) NOT NULL, 
	"description" varchar(255) NOT NULL,
	"date" DATE NOT NULL,
	"type" varchar(255) NOT NULL
);

CREATE TABLE "images" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" varchar(255) NOT NULL,
	"art_item_id" integer NOT NULL,
	"featured_image" BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE "art_item" ADD CONSTRAINT "art_item_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;

ALTER TABLE "images" ADD CONSTRAINT "images_fk0" FOREIGN KEY ("art_item_id") REFERENCES "art_item"("id") ON DELETE CASCADE;

--query for gallery
SELECT art_item.id, art_item.user_name, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date, 
jsonb_agg(images) as images FROM public.user
JOIN art_item ON public.user.id = art_item.user_id
JOIN images on art_item.id = images.art_item_id
GROUP BY art_item.id, art_item.user_id, art_item.title, art_item.latitude, art_item.longitude, art_item.description, art_item.date;

-- query for artist data
SELECT public.user.description, public.user.name FROM public.user;


--Select alls
SELECT * FROM "user";
SELECT * FROM "art_item";
SELECT * FROM "image";


--Drop tables
DROP TABLE "user";
DROP TABLE "art_item";
DROP TABLE "images";


--Alter tables





--fake data! (made for demonstration purpose only!!)

-- user data
--1	
-- INSERT INTO "public"."user"("id","name","description","email_address","type","username","password","phone_number","profile_image")
-- VALUES
-- (5,E'Jake Billiou',E'Jake is a midwestern artist, hailing from Ashley, ND and is currently creating in the hills of South Dakota',E'jakeb@gmail.com',E'artist',E'jake',E'$2a$10$ByEdRc1n.Os3c64GjU0UnexChMkvMMroycLlPdHLxn0tExBoYKcHG',7014483293,E'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');

-- --2	
-- INSERT INTO "public"."user"("id","name","description","email_address","type","username","password","phone_number","profile_image")
-- VALUES
-- (6,E'Maci Cherry',E'Maci is an artist from Hawaii and she loves to create murals using charcoal and finds herself in Fargo because she loves the scene and her sister lives here!',E'maciwindu@yahoo.com',E'artist',E'maci',E'$2a$10$DPXUrWeJXXGxI9VFELCle.TrVMkq8ikAnOLyRkxDUTsmM0/V2mYCq',2034429502,E'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg');

-- --3	
-- INSERT INTO "public"."user"("id","name","description","email_address","type","username","password","phone_number","profile_image")
-- VALUES
-- (7,E'Orry Ayo',E'Orry loves the outdoors and loves to paint it even more!',E'orryayo@gmail.com',E'artist',E'orry',E'$2a$10$J/k/5SDuRniuMHToDthiUePjekTq17HsU/U.xXiaYsdauTatmtGd6',9213324389,E'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3BhbmlzaCUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80');

-- --4	
-- INSERT INTO "public"."user"("id","name","description","email_address","type","username","password","phone_number","profile_image")
-- VALUES
-- (8,E'Steven Jesh',E'Steven is a passionate mural artist born in Fargo ND with a desire to "paint the city" as he said in an interview with the Fargo Forum',E'jeshSteven@gmail.com',E'artist',E'steven',E'$2a$10$XdGfO/zy5N.sZEuslzM8I.YK9IKh4ZDN2N/FUNO1mExR2sKop1TFm',3458882993,E'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=');


-- -- image data
-- --1	
-- INSERT INTO "public"."images"("id","url","art_item_id","featured_image")
-- VALUES
-- (1,E'https://i.pinimg.com/736x/b6/14/3a/b6143a815d7190e6b637c3369275c486.jpg',1,TRUE);

-- --2	
-- INSERT INTO "public"."images"("id","url","art_item_id","featured_image")
-- VALUES
-- (2,E'https://i.redd.it/f7izxglvk0u41.jpg',2,FALSE);

-- --3
-- INSERT INTO "public"."images"("id","url","art_item_id","featured_image")
-- VALUES
-- (3,E'https://i.pinimg.com/originals/d6/15/a4/d615a4aba5e224456d974c5853b3630c.jpg',3,TRUE);

-- --4	
-- INSERT INTO "public"."images"("id","url","art_item_id","featured_image")
-- VALUES
-- (4,E'https://assets.bigcartel.com/product_images/202485230/COLO.jpg?auto=format&fit=max&h=1000&w=1000		',4,TRUE);

-- --5	
-- INSERT INTO "public"."images"("id","url","art_item_id","featured_image")
-- VALUES
-- (5,E'https://live.staticflickr.com/2896/14533879602_5975ce40e7_b.jpg',5,TRUE);


-- -- art_item data 
-- --1
-- INSERT INTO "public"."art_item"("id","user_id", "user_name","title","latitude","longitude","description","date","type")
-- VALUES
-- (1,5,'Jake Billiou','Eye on the Wall',46.897964,-96.819995,E'This is a Eye on the wall at NDSU ',E'2010-09-14',E'mural');

-- --2	
-- INSERT INTO "public"."art_item"("id","user_id","user_name","title","latitude","longitude","description","date","type")
-- VALUES
-- (2,5,'Jake Billiou', 'Birds and Bikes',46.907347,-96.783275,E'A summary of the relationship between birds and bikes',E'2015-02-23',E'mural');

-- --3	
-- INSERT INTO "public"."art_item"("id","user_id","user_name","title","latitude","longitude","description","date","type")
-- VALUES
-- (3,6,'Maci Cherry', 'Multicolored Flowers',46.886829,-96.825777,E'Flowers.. blooming.. on the wall',E'2019-04-12',E'mural');

-- --4	
-- INSERT INTO "public"."art_item"("id","user_id","user_name","title","latitude","longitude","description","date","type")
-- VALUES
-- (4,7,'Orry Ayo', 'Tongue OUT',46.857869,-96.826853,E'Let your tongue out! Let it out!!',E'2015-06-14',E'mural');

-- --5
-- INSERT INTO "public"."art_item"("id","user_id","user_name","title","latitude","longitude","description","date","type")
-- VALUES
-- (5,8,'Steven Jesh', 'Bear Witness',46.911135,-96.786016,E'This bear is on the wall and it has many things going on with it, see if you can spot a few. I\'m making this description longer than the others for the sake of space on my web page yada yada there is a huge bear on the wall!! It\'s huge!!!',E'2019-06-05',E'mural');	