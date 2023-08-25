--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

-- Started on 2022-07-13 14:32:04

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

--
-- TOC entry 3489 (class 0 OID 17350)
-- Dependencies: 221
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (1, '10 rue de la paix', NULL, '75000', 'Paris', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (2, '010 Rusk Hill', 'Pass', '45204 CEDEX', 'Montargis', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (3, '6642 Montana Terrace', 'Crossing', '85923 CEDEX 9', 'La Roche-sur-Yon', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (4, '73 Portage Plaza', NULL, '59704 CEDEX', 'Marcq-en-Barœul', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (5, '9864 Hauk Center', 'Parkway', '06009 CEDEX 1', 'Nice', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (6, '0x12e2b97a684ed17c3ee2ec3f8ecaaa330212597a', 'sapien', 'congue elementum in hac habitasse platea', 'Aldeia', 'Portugal');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (7, '0x45e43fdee49337f9569dd9b8a829b93ce9e0a81c', 'risus', 'nulla pede ullamcorper augue a suscipit nulla elit', 'Shamva', 'Zimbabwe');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (8, '0x86b1ff7113addcdfa6f45d2a69d76628de7995d1', 'vulputate luctus', 'at feugiat', 'Sundsvall', 'Sweden');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (9, '0xeca885bded6475da13bf0433a5fcf436c18196ff', 'eu', 'ultrices erat tortor sollicitudin mi sit amet lobortis', 'El Copé', 'Panama');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (10, '0xf0776a30aca15a77ee5a8c4209818e4388571688', 'mus etiam', 'volutpat quam pede lobortis ligula sit amet eleifend', 'Dongyuan', 'China');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (11, '0xd5962e9251b57a07b12cfb65171bb9cb92839238', 'in', 'nunc commodo placerat praesent blandit nam nulla integer pede', 'Lengkongjaya', 'Indonesia');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (12, '0x1bae0bb391c1b7e7428155fd0aab2fee73e0ca5f', 'fusce', 'purus phasellus in felis donec semper', 'Shumyachi', 'Russia');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (13, '0xd8b719b8d64d5f529cf45ca0a9f945d61bedf480', 'pretium', 'proin leo odio porttitor', 'Теарце', 'Macedonia');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (14, '0x478908a3894e8c14a0babf8db8e45858d09b8767', 'morbi odio', 'id ligula suspendisse ornare consequat lectus in est risus', 'Antas', 'Portugal');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (15, '0x8d9a88ada58c55f68ebd780f5fa64d7c026269e3', 'nisl nunc', 'augue vestibulum ante ipsum primis in faucibus', 'Tomaszów Lubelski', 'Poland');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (16, '0x6150d58a0e8aa9830976ab6681b3e6f1456a6fd4', 'amet lobortis', 'aliquam erat volutpat in congue etiam justo etiam pretium iaculis', 'Kribi', 'Cameroon');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (17, '0x12b2c82bbebc8078f2d984febd7d212e6766438d', 'pellentesque at', 'quam a odio in hac habitasse platea dictumst', 'Oibioin', 'Indonesia');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (18, '0xc5bfad74a8b74456e8e38d2ee912c65484fa88db', 'a pede', 'ultrices phasellus id sapien in sapien', 'Mayakovski', 'Armenia');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (19, '0xbb658bd749e3cd4285a956f0882a670b89f3c232', 'enim blandit', 'donec vitae nisi nam', 'Dajabón', 'Dominican Republic');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (20, '0xf4968d72327db17973436ba85c50a659d00ad402', 'phasellus in', 'massa donec dapibus duis at velit eu est', 'Paris 13', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (21, '48995 Pleasure Junction', 'Terrace', '95959 CEDEX 2', 'Roissy Charles-de-Gaulle', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (22, '74204 Loftsgordon Hill', NULL, '44604 CEDEX', 'Saint-Nazaire', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (23, '2 Helena Lane', 'Center', '77224 CEDEX', 'Tournan-en-Brie', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (24, '56 Lakewood Gardens Parkway', 'Lane', '12104 CEDEX', 'Millau', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (25, '54639 Garrison Way', 'Trail', '27022 CEDEX', 'Évreux', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (26, '135 Gerald Trail', NULL, '91851 CEDEX', 'Orsay', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (27, '2 Anhalt Pass', 'Lane', '04004 CEDEX', 'Digne-les-Bains', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (28, '6293 Lighthouse Bay Point', 'Junction', '46091 CEDEX 9', 'Cahors', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (29, '2784 Utah Avenue', 'Pass', '62411 CEDEX', 'Béthune', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (30, '8 Nevada Avenue', NULL, '75243 CEDEX 13', 'Paris 13', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (31, '3 Loeprich Hill', 'Street', '33080 CEDEX', 'Bordeaux', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (32, '44688 Myrtle Junction', 'Trail', '85614 CEDEX', 'Montaigu', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (33, '823 Hudson Lane', 'Point', '94454 CEDEX', 'Limeil-Brévannes', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (34, '67701 Del Sol Hill', NULL, '27109 CEDEX', 'Val-de-Reuil', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (35, '5204 Blaine Plaza', NULL, '14018 CEDEX 2', 'Caen', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (36, '14087 Fallview Trail', NULL, '13654 CEDEX', 'Salon-de-Provence', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (37, '97 School Avenue', NULL, '94224 CEDEX', 'Charenton-le-Pont', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (38, '67 Eagan Street', NULL, '93909 CEDEX 9', 'Bobigny', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (39, '02 Blaine Place', NULL, '59304 CEDEX', 'Valenciennes', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (40, '7 Monica Point', NULL, '9052', 'Gent', 'Belgium');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (41, '7 Mitchell Center', 'Parkway', '33060 CEDEX', 'Bordeaux', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (42, '39270 Transport Lane', 'Crossing', '25086 CEDEX 9', 'Besançon', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (43, '480 Packers Plaza', NULL, '06073 CEDEX 1', 'Nice', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (44, '1 Paget Avenue', NULL, '59468 CEDEX', 'Lomme', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (45, '134 Forest Dale Junction', NULL, '18025 CEDEX', 'Bourges', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (46, '31157 Golf Lane', NULL, '18013 CEDEX', 'Bourges', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (47, '9804 Kinsman Drive', 'Circle', '71309 CEDEX', 'Montceau-les-Mines', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (48, '95 Mitchell Circle', NULL, '87046 CEDEX 1', 'Limoges', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (49, '60086 Banding Hill', 'Drive', '34038 CEDEX 1', 'Montpellier', 'France');
INSERT INTO public.address (id, address, complement, zip_code, city, country) VALUES (50, '29995 Fremont Parkway', NULL, '84072 CEDEX 4', 'Avignon', 'France');

--
-- TOC entry 3490 (class 0 OID 17358)
-- Dependencies: 222
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (1, 'Ottilie', 'Pamment', 'sit amet erat', 'http://dummyimage.com/59x98.png/cc0000/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (2, 'Wallace', 'Sheers', 'donec vitae nisi', 'http://dummyimage.com/69x53.png/dddddd/000000');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (3, 'Beauregard', 'Raynes', 'sapien', 'http://dummyimage.com/87x91.png/5fa2dd/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (4, 'Kathrine', 'Lyston', 'in leo', 'http://dummyimage.com/50x56.png/ff4444/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (5, 'Steve', 'Bottell', 'orci luctus et', 'http://dummyimage.com/55x91.png/cc0000/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (6, 'Grata', 'Dumbarton', 'varius', 'http://dummyimage.com/96x55.png/cc0000/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (7, 'Ari', 'Roiz', 'maecenas ut massa quis augue', 'http://dummyimage.com/72x72.png/cc0000/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (8, 'Nelly', 'Cabble', 'duis', 'http://dummyimage.com/97x87.png/5fa2dd/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (9, 'Lorette', 'Weall', 'erat volutpat', 'http://dummyimage.com/90x54.png/ff4444/ffffff');
insert into public.author (id, author_firstname, author_lastname, informations, author_image) values (10, 'Nannie', 'Wixey', 'eros suspendisse accumsan tortor quis', 'http://dummyimage.com/76x90.png/ff4444/ffffff');


--
-- TOC entry 3491 (class 0 OID 17366)
-- Dependencies: 223
-- Data for Name: category; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.category (id, parent_id, category_name, description) VALUES (1, null, 'poche', 'livres de poche');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (2, null, 'grand format', 'livres grand format');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (3, 1, 'romans', 'romans format poche');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (4, 2, 'romans', 'romans grand format');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (5, 3, 'policiers', 'romans policiers format poche');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (6, 4, 'policiers', 'romans policiers grand format');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (7, 2, 'santé et bien être', 'livres grand format santé et bien être');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (8, 2, 'culture et loisirs', 'livres grand format culture et loisirs');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (9, 8, 'culture', 'id pretium iaculis diam');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (10, 8, 'loisirs', 'nec');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (11, 7, 'santé', 'vitae nisi nam ultrices libero non mattis pulvinar nulla pede');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (12, 7, 'bien être', 'posuere cubilia curae');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (13, 10, 'cuisine', 'curae duis faucibus accumsan odio curabitur convallis duis');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (14, 9, 'histoire', 'pellentesque ultrices phasellus id');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (15, 11, 'exercices et fitness', 'eu orci mauris lacinia sapien');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (16, 12, 'confiance en soi', 'neque');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (17, null, 'siences', 'nonummy maecenas');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (18, null, 'religions', 'suscipit');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (19, null, 'mangas', 'proin at turpis a pede posuere nonummy');
INSERT INTO public.category (id, parent_id, category_name, description) VALUES (20, null, 'livres pour enfants', 'diam neque vestibulum eget');


--
-- TOC entry 3493 (class 0 OID 17391)
-- Dependencies: 225
-- Data for Name: editor; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (1, 19, 'rhoncus', 'aheighway0@wufoo.com', '0xde927eb5b4df7eaf566b3bf378b05ea08a25254e');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (2, 17, 'nec molestie sed justo', 'cjedrzejkiewicz1@latimes.com', '0x878ca59bceab384f6d8fdb66d47f1531fd8bc41a');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (3, 8, 'id', 'fdefilippi2@google.co.jp', '0x1415941109f4be918335ea05bac04573a02b121b');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (4, 5, 'vestibulum aliquet', 'rfilyushkin3@oaic.gov.au', '0x4a97d446d6ca94965e3d2ccc13b55c0f773a59ef');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (5, 16, 'est risus auctor sed', 'smacgorman4@nifty.com', '0x2abea10f9002d216eed7e160238987529f74f1c8');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (6, 6, 'leo maecenas pulvinar', 'sgiacomozzo5@ft.com', '0xd78f57fb24585e61efba3a3be451338aec1b27e6');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (7, 11, 'enim lorem ipsum dolor sit', 'hlonghirst6@intel.com', '0xceaa824741f63ee951f5b4b15ac660a5ee266054');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (8, 7, 'feugiat et eros', 'agoodacre7@pinterest.com', '0x0008f3bf0104afba9a28ee69f077563fc114f263');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (9, 15, 'odio elementum', 'hvanross8@goodreads.com', '0xddfb8d74e4cd10968901c5871a9d7d5fc8502b81');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (10, 3, 'vehicula consequat morbi a ipsum', 'mkinglesyd9@oaic.gov.au', '0x8967b6563087040c9a1caf5b87f3b8895a3c3618');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (11, 20, 'tristique', 'wannesa@last.fm', '0xbcfadca222e5fe2d190cbb5f15cc4f68440c4ccb');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (12, 21, 'morbi vel lectus', 'cbrianb@npr.org', '0xde59541eb78870fc620988922416ae085d18fc15');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (13, 14, 'montes', 'mkefordc@printfriendly.com', '0x1eef3536bb05834e1012be575cfd508ddb9fc295');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (14, 4, 'libero', 'kskittd@wired.com', '0x355a104b727fade855242df66965ba2d14725ae0');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (15, 10, 'lorem ipsum dolor', 'llorenze@ft.com', '0x2bb8642aaeadb01dabd7a8fb63a5e919785c85bb');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (16, 9, 'commodo placerat praesent', 'asnaself@ask.com', '0xc39bce43f5027ca6f41d19dc6ce0dc951607bbee');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (17, 22, 'in', 'jgodierg@jiathis.com', '0x7f47e35e95819fbf021b2793cdd550301b2809d1');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (18, 13, 'posuere', 'ljosskovitzh@elegantthemes.com', '0x8b85123161a233de10b3e397339db2b2ce2879a0');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (19, 18, 'tristique est', 'gprinnetti@netvibes.com', '0x4d81c2c060f5a472d43ade49d1c97583366668e1');
INSERT INTO public.editor (id, address_id, editor_name, mail, web_address) VALUES (20, 12, 'nulla eget', 'bbettyj@e-recht24.de', '0x9b6d891a75f45ee7d2b9f5b83c3577fca7525ad6');


--
-- TOC entry 3495 (class 0 OID 17406)
-- Dependencies: 227
-- Data for Name: product_language; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_language (id, product_language_name) VALUES (1, 'Français');
INSERT INTO public.product_language (id, product_language_name) VALUES (2, 'Anglais');
INSERT INTO public.product_language (id, product_language_name) VALUES (3, 'Allemand');
INSERT INTO public.product_language (id, product_language_name) VALUES (4, 'Espagnol');
INSERT INTO public.product_language (id, product_language_name) VALUES (5, 'Italien');
INSERT INTO public.product_language (id, product_language_name) VALUES (6, 'Arabe');
INSERT INTO public.product_language (id, product_language_name) VALUES (7, 'Kabyle');
INSERT INTO public.product_language (id, product_language_name) VALUES (8, 'Swahili');
INSERT INTO public.product_language (id, product_language_name) VALUES (9, 'Croate');
INSERT INTO public.product_language (id, product_language_name) VALUES (10, 'Malaisien');
INSERT INTO public.product_language (id, product_language_name) VALUES (11, 'Malgache');
INSERT INTO public.product_language (id, product_language_name) VALUES (12, 'porttitor pede justo eu');
INSERT INTO public.product_language (id, product_language_name) VALUES (13, 'mollis molestie lorem quisque ut erat curabitur gravida');
INSERT INTO public.product_language (id, product_language_name) VALUES (14, 'tortor sollicitudin mi sit amet lobortis sapien sapien');
INSERT INTO public.product_language (id, product_language_name) VALUES (15, 'sed lacus');
INSERT INTO public.product_language (id, product_language_name) VALUES (16, 'viverra eget congue eget semper rutrum nulla nunc purus phasellus');
INSERT INTO public.product_language (id, product_language_name) VALUES (17, 'blandit non interdum in ante vestibulum ante');
INSERT INTO public.product_language (id, product_language_name) VALUES (18, 'sem fusce consequat');
INSERT INTO public.product_language (id, product_language_name) VALUES (19, 'turpis adipiscing lorem vitae mattis nibh ligula');
INSERT INTO public.product_language (id, product_language_name) VALUES (20, 'rhoncus aliquam');


--
-- TOC entry 3496 (class 0 OID 17411)
-- Dependencies: 228
-- Data for Name: serie; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.serie (id, serie_name) VALUES (1, 'purus aliquet at feugiat non');
INSERT INTO public.serie (id, serie_name) VALUES (2, 'mauris laoreet');
INSERT INTO public.serie (id, serie_name) VALUES (3, 'mauris sit amet');
INSERT INTO public.serie (id, serie_name) VALUES (4, 'magnis dis parturient montes');
INSERT INTO public.serie (id, serie_name) VALUES (5, 'nisl nunc rhoncus dui vel');
INSERT INTO public.serie (id, serie_name) VALUES (6, 'id lobortis');
INSERT INTO public.serie (id, serie_name) VALUES (7, 'habitasse platea');
INSERT INTO public.serie (id, serie_name) VALUES (8, 'praesent id massa id');
INSERT INTO public.serie (id, serie_name) VALUES (9, 'purus eu magna vulputate');
INSERT INTO public.serie (id, serie_name) VALUES (10, 'tempus sit amet sem');
INSERT INTO public.serie (id, serie_name) VALUES (11, 'eros suspendisse accumsan tortor quis');
INSERT INTO public.serie (id, serie_name) VALUES (12, 'massa');
INSERT INTO public.serie (id, serie_name) VALUES (13, 'elementum eu');
INSERT INTO public.serie (id, serie_name) VALUES (14, 'rhoncus aliquam');
INSERT INTO public.serie (id, serie_name) VALUES (15, 'neque aenean auctor gravida sem');
INSERT INTO public.serie (id, serie_name) VALUES (16, 'vestibulum ante ipsum primis in');
INSERT INTO public.serie (id, serie_name) VALUES (17, 'vestibulum ante ipsum primis');
INSERT INTO public.serie (id, serie_name) VALUES (18, 'orci');
INSERT INTO public.serie (id, serie_name) VALUES (19, 'nisi volutpat eleifend donec ut');
INSERT INTO public.serie (id, serie_name) VALUES (20, 'condimentum id luctus nec');


--
-- TOC entry 3498 (class 0 OID 17421)
-- Dependencies: 230
-- Data for Name: taxe; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (1, 'TVA 5.5', 5.50);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (2, 'TVA 20.6', 20.60);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (3, 'in purus', 52.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (4, 'posuere', 10.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (5, 'congue eget semper', 5.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (6, 'libero rutrum ac', 53.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (7, 'dapibus augue vel accumsan tellus', 75.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (8, 'sit amet sapien', 96.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (9, 'lacus purus aliquet', 29.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (10, 'orci pede', 44.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (11, 'condimentum id', 99.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (12, 'nullam varius nulla', 74.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (13, 'sociis natoque penatibus et magnis', 67.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (14, 'volutpat in', 86.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (15, 'nullam varius', 92.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (16, 'quis turpis eget elit sodales', 46.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (17, 'in', 89.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (18, 'turpis a pede posuere', 11.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (19, 'convallis nunc proin at turpis', 5.00);
INSERT INTO public.taxe (id, taxe_name, taxe_value) VALUES (20, 'elit', 36.00);


--
-- TOC entry 3494 (class 0 OID 17399)
-- Dependencies: 226
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (1, 'at', '692187993-3', '2021-10-25', 'nisl duis bibendum', 'congue eget semper rutrum nulla', 1, 10.00, 1, 'magnis dis', 1, 1, false, 7, 2, 10, 2, 12, 'http://dummyimage.com/106x186.png/ff4444/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (2, 'vel sem sed sagittis', '337057728-3', '2022-05-21', 'dolor quis odio consequat varius integer ac leo pellentesque ultrices', 'ligula nec sem', 2, 7.00, 2, 'mus etiam', 2, 2, false, 15, 11, 20, 6, 5, 'http://dummyimage.com/127x181.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (3, 'sapien placerat', '658856899-1', '2022-05-16', 'adipiscing elit', 'cum sociis natoque penatibus et magnis dis parturient montes', 3, 4.00, 3, 'nulla dapibus', 3, 3, false, 5, 10, 2, 17, 8, 'http://dummyimage.com/187x165.png/ff4444/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (4, 'mattis nibh', '235104530-0', '2022-01-05', 'sagittis dui', 'nisl nunc rhoncus dui', 4, 5.00, 4, 'luctus tincidunt nulla', 4, 4, true, 13, 17, 3, 7, 10, 'http://dummyimage.com/198x112.png/cc0000/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (5, 'magnis parturient', '013355672-7', '2021-11-16', 'a ipsum integer a nibh in quis', 'lectus suspendisse potenti in eleifend quam a', 5, 2.00, 5, 'porttitor pede justo', 5, 5, true, 11, 16, 6, 8, 14, 'http://dummyimage.com/148x122.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (6, 'adipiscing elit proin risus', '915902174-8', '2021-12-07', 'molestie lorem quisque ut erat curabitur gravida nisi', 'tortor risus dapibus augue vel accumsan tellus nisi', 6, 9.00, 6, 'mauris morbi', 6, 6, true, 9, 7, 18, 3, 6, 'http://dummyimage.com/146x141.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (7, 'tortor duis mattis', '133941138-5', '2021-08-23', 'felis fusce posuere felis', 'ligula suspendisse ornare consequat lectus in', 7, 2.00, 7, 'pellentesque at nulla suspendisse potenti', 7, 7, true, 3, 1, 19, 13, 15, 'http://dummyimage.com/159x131.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (8, 'erat viverra eget congue', '909531079-5', '2021-11-27', 'luctus et ultrices posuere cubilia curae nulla', 'lorem id', 8, 3.00, 8, 'libero non mattis', 8, 8, true, 18, 3, 15, 1, 17, 'http://dummyimage.com/115x182.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (9, 'lobortis ligula sit amet', '484765387-4', '2021-10-17', 'quis justo maecenas rhoncus', 'diam cras pellentesque volutpat', 9, 4.00, 9, 'interdum mauris ullamcorper', 9, 9, true, 8, 6, 9, 9, 9, 'http://dummyimage.com/170x118.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (10, 'vestibulum eget vulputate', '457319987-X', '2021-11-04', 'porttitor', 'orci luctus et ultrices', 10, 7.00, 10, 'sagittis nam congue', 10, 10, true, 17, 18, 16, 20, 1, 'http://dummyimage.com/132x116.png/cc0000/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (11, 'justo nec', '609431456-5', '2021-07-13', 'elementum nullam varius nulla facilisi cras non velit nec nisi', 'metus arcu adipiscing molestie hendrerit at', 11, 1.00, 11, 'nulla sed accumsan felis', 11, 11, false, 20, 13, 17, 16, 20, 'http://dummyimage.com/173x104.png/dddddd/000000');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (12, 'mattis pulvinar nulla pede ullamcorper', '757304907-2', '2022-01-19', 'tempor turpis nec euismod scelerisque quam turpis adipiscing', 'blandit mi in porttitor', 12, 6.00, 12, 'nulla tempus vivamus', 12, 12, false, 14, 15, 5, 5, 2, 'http://dummyimage.com/194x184.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (13, 'lacus curabitur', '627495285-3', '2021-11-05', 'pellentesque viverra pede ac diam cras pellentesque', 'lacus curabitur at ipsum', 13, 3.00, 13, 'enim sit amet nunc viverra', 13, 13, false, 10, 19, 7, 18, 3, 'http://dummyimage.com/135x133.png/ff4444/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (14, 'libero convallis eget', '720497203-1', '2022-02-03', 'magnis dis parturient montes nascetur ridiculus mus', 'semper est quam pharetra magna ac consequat metus sapien', 14, 8.00, 14, 'urna pretium', 14, 14, false, 1, 12, 12, 15, 11, 'http://dummyimage.com/181x115.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (15, 'sed accumsan felis', '507782114-3', '2021-09-28', 'sollicitudin vitae consectetuer eget rutrum at lorem', 'sapien urna pretium nisl ut volutpat sapien arcu sed', 15, 3.00, 15, 'mauris viverra', 15, 15, true, 2, 14, 14, 10, 19, 'http://dummyimage.com/156x198.png/dddddd/000000');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (16, 'augue aliquam erat', '076107497-X', '2021-10-17', 'magna bibendum imperdiet nullam orci', 'tristique fusce congue diam id ornare imperdiet', 16, 6.00, 16, 'ac', 16, 16, false, 16, 9, 13, 14, 18, 'http://dummyimage.com/175x137.png/dddddd/000000');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (17, 'felis sed', '192718560-2', '2022-04-24', 'nunc proin at turpis a pede posuere nonummy integer', 'congue risus', 17, 7.00, 17, 'morbi', 17, 17, true, 6, 8, 8, 4, 13, 'http://dummyimage.com/113x152.png/dddddd/000000');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (18, 'lobortis ligula sit', '692077952-8', '2022-04-12', 'libero rutrum ac lobortis vel dapibus at diam', 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices', 18, 8.00, 18, 'vulputate nonummy maecenas tincidunt', 18, 18, true, 12, 20, 4, 19, 4, 'http://dummyimage.com/155x118.png/ff4444/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (19, 'in imperdiet et', '748749402-0', '2021-10-20', 'phasellus id sapien', 'a', 19, 2.00, 19, 'vel augue vestibulum ante ipsum', 19, 19, false, 19, 4, 11, 12, 16, 'http://dummyimage.com/184x135.png/dddddd/000000');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (20, 'in ante', '589046788-3', '2021-10-08', 'mi integer ac', 'mauris morbi non', 20, 8.00, 20, 'ac nulla sed', 20, 20, false, 4, 5, 1, 11, 7, 'http://dummyimage.com/186x178.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (21, 'metus', '135212014-3', '2021-10-19', 'cras mi', 'mauris vulputate elementum', 21, 2, 21, 'eu sapien cursus vestibulum', 21, 21, true, '7', '13', '14', '10', '6', 'http://dummyimage.com/165x173.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (22, 'dui', '095171211-X', '2021-11-03', 'mattis odio donec vitae nisi nam ultrices libero non', 'pretium iaculis diam erat fermentum justo nec condimentum neque sapien', 22, 7, 22, 'pellentesque ultrices', 22, 22, false, '13', '5', '1', '18', '5', 'http://dummyimage.com/167x169.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (23, 'lectus pellentesque eget', '187750881-0', '2022-05-08', 'vestibulum', 'tincidunt eu felis fusce', 23, 3, 23, 'ligula in lacus', 23, 23, true, '10', '10', '7', '19', '3', 'http://dummyimage.com/153x161.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (24, 'et ultrices posuere', '386144884-X', '2022-04-27', 'sit amet diam in magna bibendum imperdiet nullam orci pede', 'in leo maecenas pulvinar lobortis est', 24, 5, 24, 'sit amet cursus id', 24, 24, false, '1', '9', '4', '2', '10', 'http://dummyimage.com/137x110.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (25, 'quisque ut', '890395030-5', '2021-07-13', 'aliquam erat volutpat in congue etiam justo etiam pretium', 'cras pellentesque volutpat', 25, 9, 25, 'lacus morbi sem', 25, 25, false, '8', '17', '20', '5', '20', 'http://dummyimage.com/169x137.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (26, 'semper rutrum', '551353880-6', '2022-05-25', 'amet', 'donec dapibus', 26, 1, 26, 'nunc viverra dapibus nulla', 26, 26, false, '5', '4', '5', '9', '19', 'http://dummyimage.com/111x193.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (27, 'luctus et ultrices', '410354558-5', '2021-10-11', 'at dolor quis odio consequat varius integer ac leo', 'amet consectetuer adipiscing elit proin risus praesent', 27, 8, 27, 'ultrices phasellus id sapien in', 27, 27, false, '14', '12', '16', '11', '7', 'http://dummyimage.com/117x160.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (28, 'dolor', '062056141-6', '2021-08-05', 'phasellus sit', 'gravida sem praesent id massa', 28, 9, 28, 'lobortis', 28, 28, true, '19', '15', '17', '20', '9', 'http://dummyimage.com/122x198.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (29, 'sit amet', '441679152-6', '2022-01-12', 'morbi odio odio elementum eu interdum', 'sapien in sapien iaculis congue', 29, 7, 29, 'vestibulum rutrum rutrum neque aenean', 29, 29, false, '4', '2', '10', '12', '18', 'http://dummyimage.com/193x131.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (30, 'maecenas', '969642968-1', '2022-02-09', 'ipsum praesent blandit lacinia erat vestibulum sed', 'in leo maecenas pulvinar lobortis est phasellus sit amet', 30, 6, 30, 'nulla nisl nunc', 30, 30, true, '3', '1', '3', '1', '14', 'http://dummyimage.com/127x152.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (31, 'amet nulla', '934706567-6', '2021-10-16', 'dapibus dolor vel est', 'in', 1, 6, 1, 'vulputate nonummy', 1, 1, true, '14', '5', '7', '20', '19', 'http://dummyimage.com/172x183.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (32, 'proin eu', '363677157-4', '2021-08-27', 'quis libero nullam sit amet turpis elementum', 'non', 2, 9, 2, 'donec quis', 2, 2, false, '18', '2', '6', '9', '9', 'http://dummyimage.com/109x177.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (33, 'habitasse platea dictumst', '224541622-8', '2021-11-04', 'neque sapien', 'libero quis orci nullam molestie', 3, 8, 3, 'lobortis est', 3, 3, false, '3', '4', '11', '8', '11', 'http://dummyimage.com/138x186.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (34, 'convallis eget', '629610425-1', '2021-11-14', 'quis turpis', 'at nunc', 4, 5, 4, 'sed tincidunt', 4, 4, false, '7', '19', '18', '11', '17', 'http://dummyimage.com/111x172.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (35, 'eget nunc', '227081523-8', '2021-09-10', 'quis tortor id nulla ultrices', 'tincidunt', 5, 10, 5, 'fusce consequat nulla nisl nunc', 5, 5, true, '12', '17', '2', '4', '7', 'http://dummyimage.com/136x188.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (36, 'amet', '411929615-6', '2022-06-13', 'libero', 'quis justo maecenas', 6, 2, 6, 'consequat metus sapien ut nunc', 6, 6, true, '15', '10', '20', '6', '8', 'http://dummyimage.com/119x149.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (37, 'lobortis', '738717660-4', '2022-04-21', 'amet', 'nulla ultrices aliquet maecenas leo odio condimentum', 7, 1, 7, 'rhoncus mauris', 7, 7, false, '1', '12', '8', '5', '4', 'http://dummyimage.com/134x142.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (38, 'risus dapibus augue', '562630431-2', '2022-03-15', 'nec dui', 'dui', 8, 9, 8, 'lobortis sapien', 8, 8, false, '16', '20', '9', '12', '20', 'http://dummyimage.com/198x122.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (39, 'ipsum', '603099619-3', '2021-08-21', 'adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam', 'mauris eget massa tempor convallis nulla neque libero', 9, 3, 9, 'nulla facilisi cras non', 9, 9, true, '11', '11', '14', '7', '13', 'http://dummyimage.com/192x181.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (40, 'congue diam id', '916138834-3', '2022-03-17', 'interdum in ante vestibulum ante ipsum primis in faucibus', 'tincidunt nulla mollis molestie lorem quisque', 10, 1, 10, 'ut nulla sed accumsan felis', 10, 10, true, '13', '7', '3', '16', '5', 'http://dummyimage.com/150x141.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (41, 'pellentesque eget', '480616791-6', '2021-08-15', 'justo aliquam quis', 'volutpat erat quisque erat eros viverra eget congue eget semper', 11, 2, 11, 'morbi vestibulum velit id pretium', 11, 11, false, '19', '9', '13', '1', '18', 'http://dummyimage.com/167x103.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (42, 'nulla', '116473013-4', '2021-08-25', 'ligula', 'mauris eget massa tempor convallis nulla', 12, 3, 12, 'orci', 12, 12, false, '2', '16', '1', '18', '6', 'http://dummyimage.com/122x170.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (43, 'a', '859855734-X', '2022-07-04', 'rutrum neque aenean auctor gravida sem praesent id', 'proin', 13, 8, 13, 'mus', 13, 13, true, '8', '8', '19', '10', '12', 'http://dummyimage.com/160x112.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (44, 'in libero ut', '077429542-2', '2021-12-27', 'lobortis vel dapibus at diam nam tristique', 'eget rutrum at lorem', 14, 2, 14, 'eu', 14, 14, true, '10', '15', '16', '15', '2', 'http://dummyimage.com/160x153.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (45, 'dui vel nisl', '776435069-9', '2022-04-05', 'nullam', 'cursus', 15, 3, 15, 'rutrum nulla', 15, 15, true, '9', '18', '12', '13', '3', 'http://dummyimage.com/127x167.png/ff4444/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (46, 'vel', '798384699-1', '2022-05-03', 'quis odio consequat varius', 'ipsum dolor sit amet consectetuer', 16, 6, 16, 'ac lobortis vel', 16, 16, true, '17', '1', '15', '2', '16', 'http://dummyimage.com/198x191.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (47, 'venenatis', '603212542-4', '2022-01-31', 'vulputate luctus cum sociis', 'tincidunt ante vel ipsum praesent blandit', 17, 8, 17, 'maecenas rhoncus aliquam lacus', 17, 17, false, '5', '6', '4', '17', '15', 'http://dummyimage.com/129x185.png/dddddd/000000');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (48, 'sapien ut nunc', '206924702-3', '2022-03-18', 'cubilia curae duis faucibus', 'fusce posuere felis sed lacus morbi sem', 18, 6, 18, 'curabitur at', 18, 18, true, '4', '14', '5', '14', '14', 'http://dummyimage.com/175x150.png/cc0000/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (49, 'ipsum', '100060564-7', '2022-03-18', 'pretium quis lectus suspendisse potenti', 'pharetra magna ac consequat metus sapien ut nunc vestibulum ante', 19, 2, 19, 'morbi porttitor', 19, 19, true, '20', '3', '17', '19', '10', 'http://dummyimage.com/108x193.png/5fa2dd/ffffff');
insert into public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) values (50, 'parturient montes nascetur', '268401498-1', '2022-04-18', 'nulla sed accumsan felis ut', 'volutpat convallis morbi odio', 20, 4, 20, 'non velit', 20, 20, false, '6', '13', '10', '3', '1', 'http://dummyimage.com/185x196.png/ff4444/ffffff');
--
-- TOC entry 3505 (class 0 OID 17513)
-- Dependencies: 237
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_account (id, firstname, lastname, email, password, token, is_checked) VALUES (1, 'admin', 'User', 'admin@wayabooks.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
INSERT INTO public.user_account (id, firstname, lastname, email, password, token, is_checked) VALUES (2, 'commercial', 'User', 'commercial@wayabooks.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
INSERT INTO public.user_account (id, firstname, lastname, email, password, token, is_checked) VALUES (3, 'user', 'User', 'user@wayabooks.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (4, 'Pietro', 'De Freitas', 'pdefreitas3@last.fm', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (5, 'Gar', 'Yanuk', 'gyanuk4@chicagotribune.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (6, 'Brear', 'Glendza', 'bglendza5@state.tx.us', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (7, 'Vale', 'Laurenty', 'vlaurenty6@meetup.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (8, 'James', 'Sewill', 'jsewill7@creativecommons.org', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (9, 'Agnola', 'Schutt', 'aschutt8@simplemachines.org', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (10, 'Sharla', 'Crossthwaite', 'scrossthwaite9@sohu.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (11, 'Jimmie', 'Wyness', 'jwynessa@123-reg.co.uk', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (12, 'Perla', 'Demaine', 'pdemaineb@bbc.co.uk', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (13, 'Gretal', 'Pauwel', 'gpauwelc@shareasale.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (14, 'Ferrel', 'Tegler', 'fteglerd@dropbox.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (15, 'Gallard', 'McIlharga', 'gmcilhargae@so-net.ne.jp', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (16, 'Rivkah', 'Geindre', 'rgeindref@shinystat.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (17, 'Savina', 'Lineham', 'slinehamg@mozilla.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (18, 'Bernardina', 'Carless', 'bcarlessh@usgs.gov', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (19, 'Rici', 'Pay', 'rpayi@hatena.ne.jp', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (20, 'Gene', 'Perryn', 'gperrynj@sogou.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (21, 'Mateo', 'Errowe', 'merrowek@bizjournals.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (22, 'Bruce', 'McComas', 'bmccomasl@biblegateway.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);
insert into public.user_account (id, firstname, lastname, email, password, token, is_checked) values (23, 'Findlay', 'Audus', 'faudusm@prnewswire.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O', null, true);

--
-- TOC entry 3501 (class 0 OID 17442)
-- Dependencies: 233
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (1, '2021-11-29', 3, 'nunc', '14', '11');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (2, '2022-03-12', 5, 'donec', '22', '39');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (3, '2022-01-30', 4, 'dictumst aliquam augue quam sollicitudin', '23', '32');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (4, '2022-01-29', 1, 'et', '20', '4');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (5, '2022-07-28', 0, 'vulputate vitae nisl', '6', '34');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (6, '2021-10-06', 0, 'in quis justo maecenas', '13', '25');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (7, '2021-09-28', 5, 'pellentesque', '19', '49');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (8, '2022-02-28', 4, 'donec diam neque', '18', '48');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (9, '2022-02-26', 1, 'morbi sem mauris laoreet', '21', '44');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (10, '2021-12-10', 5, 'at ipsum', '10', '17');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (11, '2022-07-04', 2, 'amet nunc', '16', '15');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (12, '2022-01-26', 5, 'erat quisque erat', '12', '13');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (13, '2022-06-20', 4, 'nunc', '15', '33');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (14, '2022-02-11', 0, 'id justo', '7', '42');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (15, '2021-12-21', 0, 'arcu adipiscing molestie hendrerit', '11', '24');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (16, '2021-08-04', 5, 'in hac habitasse', '9', '1');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (17, '2022-01-14', 4, 'velit', '5', '50');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (18, '2021-12-17', 3, 'tempus vivamus in felis', '4', '30');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (19, '2021-09-21', 3, 'nulla suscipit ligula in', '17', '46');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (20, '2022-07-03', 1, 'ultricies', '8', '14');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (21, '2022-05-06', 2, 'at nulla suspendisse potenti cras', '2', '45');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (22, '2022-05-17', 0, 'ipsum', '3', '29');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (23, '2022-04-15', 4, 'faucibus orci luctus et ultrices', '1', '22');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (24, '2022-01-29', 2, 'sed augue', '5', '8');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (25, '2022-01-19', 2, 'pulvinar', '22', '9');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (26, '2022-03-15', 0, 'blandit lacinia erat', '18', '18');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (27, '2021-10-18', 4, 'curabitur in', '21', '43');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (28, '2022-07-25', 5, 'interdum venenatis turpis enim', '16', '26');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (29, '2021-11-29', 3, 'urna', '9', '7');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (30, '2021-09-11', 1, 'varius integer ac leo pellentesque', '15', '37');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (31, '2021-10-22', 2, 'ut at dolor quis', '6', '15');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (32, '2021-08-06', 0, 'praesent blandit', '12', '28');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (33, '2021-11-08', 4, 'morbi non lectus aliquam', '2', '21');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (34, '2022-02-02', 2, 'quam fringilla rhoncus mauris enim', '11', '19');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (35, '2022-03-30', 0, 'in', '4', '3');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (36, '2022-04-25', 3, 'montes nascetur ridiculus mus', '8', '41');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (37, '2022-01-17', 4, 'et ultrices', '7', '12');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (38, '2021-08-27', 4, 'sollicitudin', '13', '16');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (39, '2021-08-06', 5, 'quam suspendisse potenti nullam porttitor', '19', '6');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (40, '2021-09-17', 2, 'donec vitae', '1', '2');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (41, '2022-03-01', 2, 'nisl nunc', '17', '23');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (42, '2022-03-05', 3, 'in hac habitasse platea dictumst', '20', '47');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (43, '2022-02-24', 2, 'duis ac', '14', '35');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (44, '2022-02-24', 1, 'magnis dis parturient', '23', '27');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (45, '2021-08-18', 3, 'imperdiet sapien', '10', '31');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (46, '2021-10-24', 0, 'habitasse', '3', '36');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (47, '2022-07-22', 0, 'blandit nam nulla integer', '19', '20');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (48, '2021-12-11', 2, 'diam id ornare imperdiet sapien', '15', '40');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (49, '2022-04-23', 2, 'ut', '23', '38');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (50, '2022-03-24', 0, 'risus', '18', '5');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (51, '2021-08-29', 5, 'sed sagittis nam congue', '3', '50');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (52, '2022-07-25', 5, 'morbi vel lectus in', '17', '3');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (53, '2021-11-22', 5, 'porta volutpat erat quisque erat', '20', '28');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (54, '2021-12-03', 5, 'suscipit a', '6', '37');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (55, '2022-03-14', 0, 'aliquet', '11', '11');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (56, '2022-04-01', 1, 'aliquam lacus', '21', '5');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (57, '2021-10-19', 4, 'enim blandit mi in porttitor', '2', '29');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (58, '2022-06-07', 5, 'ac', '16', '7');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (59, '2022-01-03', 3, 'tellus nulla ut', '4', '21');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (60, '2021-10-06', 2, 'nam dui proin leo', '9', '32');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (61, '2022-02-03', 0, 'aenean auctor', '1', '26');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (62, '2022-05-18', 4, 'ultrices posuere cubilia curae', '5', '40');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (63, '2021-09-07', 2, 'etiam faucibus cursus urna', '7', '49');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (64, '2021-08-09', 1, 'vel', '22', '20');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (65, '2021-12-13', 2, 'porttitor', '13', '45');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (66, '2022-03-24', 1, 'consequat metus sapien', '8', '23');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (67, '2021-12-30', 2, 'suspendisse potenti', '12', '25');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (68, '2022-02-12', 4, 'pellentesque ultrices mattis odio donec', '14', '14');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (69, '2022-02-12', 0, 'varius nulla', '10', '8');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (70, '2022-01-18', 0, 'dictumst aliquam augue', '22', '2');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (71, '2022-01-19', 0, 'nunc commodo placerat praesent blandit', '21', '35');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (72, '2022-04-25', 5, 'vulputate justo in blandit', '20', '25');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (73, '2022-07-24', 0, 'mauris viverra diam', '23', '28');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (74, '2021-09-13', 0, 'dapibus at diam nam', '5', '12');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (75, '2022-05-15', 0, 'quis tortor id', '12', '19');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (76, '2021-11-04', 5, 'ante ipsum primis', '19', '34');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (77, '2022-05-28', 1, 'nunc proin at turpis a', '3', '18');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (78, '2021-08-26', 0, 'primis in faucibus orci luctus', '10', '1');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (79, '2021-08-01', 4, 'pede', '2', '36');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (80, '2021-12-20', 4, 'vivamus vestibulum sagittis sapien cum', '6', '48');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (81, '2022-02-17', 5, 'et ultrices posuere cubilia curae', '4', '33');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (82, '2022-07-19', 0, 'donec ut dolor morbi vel', '9', '27');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (83, '2021-11-14', 2, 'morbi ut', '17', '39');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (84, '2021-08-17', 5, 'elementum', '15', '42');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (85, '2021-11-23', 5, 'mauris laoreet ut rhoncus', '14', '15');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (86, '2022-04-20', 5, 'integer', '11', '16');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (87, '2022-02-04', 2, 'in hac habitasse platea', '1', '17');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (88, '2022-01-31', 4, 'eu nibh quisque', '16', '22');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (89, '2022-01-17', 3, 'porttitor', '18', '9');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (90, '2021-09-08', 2, 'porta volutpat quam pede lobortis', '8', '4');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (91, '2021-10-03', 3, 'pede libero quis orci', '7', '23');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (92, '2021-08-23', 1, 'neque duis bibendum morbi', '13', '30');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (93, '2022-01-06', 2, 'sed vestibulum sit amet cursus', '21', '10');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (94, '2021-12-19', 3, 'sodales scelerisque mauris sit', '7', '6');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (95, '2022-05-22', 1, 'eu pede', '16', '10');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (96, '2021-12-20', 4, 'turpis', '6', '46');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (97, '2021-10-23', 2, 'mauris', '20', '13');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (98, '2022-02-24', 3, 'auctor gravida', '15', '31');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (99, '2022-05-20', 4, 'at diam nam', '17', '44');
insert into public.comment (id, comment_date, evaluation, comment, comment_user_id, comment_product_id) values (100, '2021-12-15', 3, 'a ipsum integer', '5', '24');


--
-- TOC entry 3492 (class 0 OID 17384)
-- Dependencies: 224
-- Data for Name: contact_message; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3477 (class 0 OID 17331)
-- Dependencies: 209
-- Data for Name: doctrine_migration_versions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3510 (class 0 OID 17568)
-- Dependencies: 242
-- Data for Name: order_status; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3502 (class 0 OID 17448)
-- Dependencies: 234
-- Data for Name: product_author; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into public.product_author (product_id, author_id) values (1, 3);
insert into public.product_author (product_id, author_id) values (2, 1);
insert into public.product_author (product_id, author_id) values (3, 4);
insert into public.product_author (product_id, author_id) values (4, 10);
insert into public.product_author (product_id, author_id) values (5, 8);
insert into public.product_author (product_id, author_id) values (6, 5);
insert into public.product_author (product_id, author_id) values (6, 9);
insert into public.product_author (product_id, author_id) values (7, 4);
insert into public.product_author (product_id, author_id) values (8, 9);
insert into public.product_author (product_id, author_id) values (9, 2);
insert into public.product_author (product_id, author_id) values (9, 10);
insert into public.product_author (product_id, author_id) values (10, 2);
insert into public.product_author (product_id, author_id) values (10, 3);
insert into public.product_author (product_id, author_id) values (11, 8);
insert into public.product_author (product_id, author_id) values (12, 2);
insert into public.product_author (product_id, author_id) values (13, 3);
insert into public.product_author (product_id, author_id) values (14, 4);
insert into public.product_author (product_id, author_id) values (15, 8);
insert into public.product_author (product_id, author_id) values (16, 10);
insert into public.product_author (product_id, author_id) values (17, 5);
insert into public.product_author (product_id, author_id) values (18, 3);
insert into public.product_author (product_id, author_id) values (19, 6);
insert into public.product_author (product_id, author_id) values (20, 2);
insert into public.product_author (product_id, author_id) values (20, 9);
insert into public.product_author (product_id, author_id) values (21, 3);
insert into public.product_author (product_id, author_id) values (22, 5);
insert into public.product_author (product_id, author_id) values (23, 10);
insert into public.product_author (product_id, author_id) values (24, 9);
insert into public.product_author (product_id, author_id) values (25, 6);
insert into public.product_author (product_id, author_id) values (26, 2);
insert into public.product_author (product_id, author_id) values (27, 3);
insert into public.product_author (product_id, author_id) values (28, 4);
insert into public.product_author (product_id, author_id) values (29, 3);
insert into public.product_author (product_id, author_id) values (30, 1);
insert into public.product_author (product_id, author_id) values (31, 8);
insert into public.product_author (product_id, author_id) values (32, 10);
insert into public.product_author (product_id, author_id) values (33, 1);
insert into public.product_author (product_id, author_id) values (34, 1);
insert into public.product_author (product_id, author_id) values (35, 7);
insert into public.product_author (product_id, author_id) values (36, 10);
insert into public.product_author (product_id, author_id) values (37, 8);
insert into public.product_author (product_id, author_id) values (38, 4);
insert into public.product_author (product_id, author_id) values (39, 9);
insert into public.product_author (product_id, author_id) values (40, 1);
insert into public.product_author (product_id, author_id) values (40, 5);
insert into public.product_author (product_id, author_id) values (40, 8);
insert into public.product_author (product_id, author_id) values (41, 1);
insert into public.product_author (product_id, author_id) values (41, 2);
insert into public.product_author (product_id, author_id) values (41, 4);
insert into public.product_author (product_id, author_id) values (41, 6);
insert into public.product_author (product_id, author_id) values (41, 7);
insert into public.product_author (product_id, author_id) values (42, 1);
insert into public.product_author (product_id, author_id) values (42, 6);
insert into public.product_author (product_id, author_id) values (42, 7);
insert into public.product_author (product_id, author_id) values (43, 1);
insert into public.product_author (product_id, author_id) values (43, 6);
insert into public.product_author (product_id, author_id) values (44, 8);
insert into public.product_author (product_id, author_id) values (44, 9);
insert into public.product_author (product_id, author_id) values (45, 1);
insert into public.product_author (product_id, author_id) values (45, 4);
insert into public.product_author (product_id, author_id) values (46, 9);
insert into public.product_author (product_id, author_id) values (47, 4);
insert into public.product_author (product_id, author_id) values (48, 8);
insert into public.product_author (product_id, author_id) values (49, 4);
insert into public.product_author (product_id, author_id) values (50, 10);


--
-- TOC entry 3511 (class 0 OID 17573)
-- Dependencies: 243
-- Data for Name: product_order; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3497 (class 0 OID 17416)
-- Dependencies: 229
-- Data for Name: tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into public.tag (id, tag_name) values (1, 'Nouveautés');
insert into public.tag (id, tag_name) values (2, 'Meilleures ventes');
insert into public.tag (id, tag_name) values (3, 'Promotions');

--
-- TOC entry 3503 (class 0 OID 17455)
-- Dependencies: 235
-- Data for Name: product_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--

insert into public.product_tag (product_id, tag_id) values (1, 1);
insert into public.product_tag (product_id, tag_id) values (2, 1);
insert into public.product_tag (product_id, tag_id) values (3, 1);
insert into public.product_tag (product_id, tag_id) values (4, 1);
insert into public.product_tag (product_id, tag_id) values (5, 1);
insert into public.product_tag (product_id, tag_id) values (6, 2);
insert into public.product_tag (product_id, tag_id) values (7, 2);
insert into public.product_tag (product_id, tag_id) values (8, 2);
insert into public.product_tag (product_id, tag_id) values (9, 2);
insert into public.product_tag (product_id, tag_id) values (10, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (11, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (12, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (13, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (14, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (15, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (16, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (17, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (18, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (19, 2); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (20, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (21, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (22, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (23, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (24, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (25, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (26, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (27, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (28, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (29, 3); 
INSERT INTO public.product_tag (product_id, tag_id) VALUES (30, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (31, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (32, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (33, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (34, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (35, 3);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (36, 1);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (37, 1);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (38, 1);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (39, 1);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (40, 1);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (41, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (42, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (43, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (44, 2);
INSERT INTO public.product_tag (product_id, tag_id) VALUES (45, 2);

--
-- TOC entry 3507 (class 0 OID 17527)
-- Dependencies: 239
-- Data for Name: user_account_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (1, 1);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (2, 1);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (3, 1);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (4, 23);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (5, 24);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (6, 25);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (7, 26);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (8, 27);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (9, 28);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (10, 29);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (11, 30);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (12, 31);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (13, 32);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (14, 33);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (15, 34);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (16, 35);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (17, 36);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (18, 37);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (19, 38);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (20, 39);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (21, 40);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (22, 41);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (23, 42);

--
-- TOC entry 3499 (class 0 OID 17426)
-- Dependencies: 231
-- Data for Name: user_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_role (id, user_role_name) VALUES (1, 'ROLE_ADMIN');
INSERT INTO public.user_role (id, user_role_name) VALUES (2, 'ROLE_COMMERCIAL');
INSERT INTO public.user_role (id, user_role_name) VALUES (3, 'ROLE_USER');

--
-- TOC entry 3506 (class 0 OID 17520)
-- Dependencies: 238
-- Data for Name: user_account_user_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (1, 1);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (1, 2);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (1, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (2, 2);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (2, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (3, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (4, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (5, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (6, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (7, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (8, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (9, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (10, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (11, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (12, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (13, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (14, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (15, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (16, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (17, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (18, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (19, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (20, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (21, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (22, 3);
INSERT INTO public.user_account_user_role (user_account_id, user_role_id) VALUES (23, 3);

--
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 51, true);


--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 211
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.author_id_seq', 11, true);


--
-- TOC entry 3519 (class 0 OID 0)
-- Dependencies: 212
-- Name: category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.category_id_seq', 21, true);


--
-- TOC entry 3520 (class 0 OID 0)
-- Dependencies: 232
-- Name: comment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.comment_id_seq', 101, false);


--
-- TOC entry 3521 (class 0 OID 0)
-- Dependencies: 213
-- Name: contact_message_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_message_id_seq', 1, false);


--
-- TOC entry 3522 (class 0 OID 0)
-- Dependencies: 214
-- Name: editor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.editor_id_seq', 21, true);


--
-- TOC entry 3523 (class 0 OID 0)
-- Dependencies: 240
-- Name: order_status_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.order_status_id_seq', 1, false);


--
-- TOC entry 3524 (class 0 OID 0)
-- Dependencies: 215
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 51, true);


--
-- TOC entry 3525 (class 0 OID 0)
-- Dependencies: 216
-- Name: product_language_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_language_id_seq', 21, true);


--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 241
-- Name: product_order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_order_id_seq', 1, false);


--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 217
-- Name: serie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.serie_id_seq', 21, true);


--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 218
-- Name: tag_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tag_id_seq', 4, false);


--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 219
-- Name: taxe_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.taxe_id_seq', 21, true);


--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 236
-- Name: user_account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_account_id_seq', 24, true);


--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 220
-- Name: user_role_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_role_id_seq', 4, true);


-- Completed on 2022-07-13 14:32:05

--
-- PostgreSQL database dump complete
--

