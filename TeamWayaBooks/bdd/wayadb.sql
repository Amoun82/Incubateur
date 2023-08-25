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

--
-- TOC entry 3490 (class 0 OID 17358)
-- Dependencies: 222
-- Data for Name: author; Type: TABLE DATA; Schema: public; Owner: postgres
--



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
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (5, 'magnis dis parturient', '013355672-7', '2021-11-16', 'a ipsum integer a nibh in quis', 'lectus suspendisse potenti in eleifend quam a', 5, 2.00, 5, 'porttitor pede justo', 5, 5, true, 11, 16, 6, 8, 14, 'http://dummyimage.com/148x122.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (6, 'adipiscing elit proin risus', '915902174-8', '2021-12-07', 'molestie lorem quisque ut erat curabitur gravida nisi', 'tortor risus dapibus augue vel accumsan tellus nisi', 6, 9.00, 6, 'mauris morbi', 6, 6, true, 9, 7, 18, 3, 6, 'http://dummyimage.com/146x141.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (7, 'tortor duis mattis egestas metus', '133941138-5', '2021-08-23', 'felis fusce posuere felis', 'ligula suspendisse ornare consequat lectus in', 7, 2.00, 7, 'pellentesque at nulla suspendisse potenti', 7, 7, true, 3, 1, 19, 13, 15, 'http://dummyimage.com/159x131.png/5fa2dd/ffffff');
INSERT INTO public.product (id, product_name, isbn, published_date, description, description_long, pages, price, stock, dimensions, weight, discount, is_public, category_id, taxe_id, serie_id, product_language_id, editor_id, product_image) VALUES (8, 'erat eros viverra eget congue', '909531079-5', '2021-11-27', 'luctus et ultrices posuere cubilia curae nulla', 'lorem id', 8, 3.00, 8, 'libero non mattis', 8, 8, true, 18, 3, 15, 1, 17, 'http://dummyimage.com/115x182.png/5fa2dd/ffffff');
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


--
-- TOC entry 3505 (class 0 OID 17513)
-- Dependencies: 237
-- Data for Name: user_account; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_account (id, firstname, lastname, email, password) VALUES (1, 'admin', 'User', 'admin@wayabooks.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O');
INSERT INTO public.user_account (id, firstname, lastname, email, password) VALUES (2, 'commercial', 'User', 'commercial@wayabooks.com', '$2y$13$ft5QMS2pNoOqp6h/WXFB4un5XC4yg2T0vJHsYI3HyNtB8ZA//xA0O');


--
-- TOC entry 3501 (class 0 OID 17442)
-- Dependencies: 233
-- Data for Name: comment; Type: TABLE DATA; Schema: public; Owner: postgres
--



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



--
-- TOC entry 3503 (class 0 OID 17455)
-- Dependencies: 235
-- Data for Name: product_tag; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3507 (class 0 OID 17527)
-- Dependencies: 239
-- Data for Name: user_account_address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (1, 1);
INSERT INTO public.user_account_address (user_account_id, address_id) VALUES (2, 1);

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

--
-- TOC entry 3517 (class 0 OID 0)
-- Dependencies: 210
-- Name: address_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.address_id_seq', 21, true);


--
-- TOC entry 3518 (class 0 OID 0)
-- Dependencies: 211
-- Name: author_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.author_id_seq', 21, true);


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

SELECT pg_catalog.setval('public.comment_id_seq', 1, false);


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

SELECT pg_catalog.setval('public.product_id_seq', 21, true);


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

SELECT pg_catalog.setval('public.tag_id_seq', 1, false);


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

SELECT pg_catalog.setval('public.user_account_id_seq', 3, true);


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

