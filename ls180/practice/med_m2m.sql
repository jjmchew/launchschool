-- start at 12:57; end  13:47  (50 mins)

-- DON'T FORGET TO CREATE THE APPROPRIATE DATABASE!!

-- DROP TABLE IF EXISTS services CASCADE;
-- DROP TABLE IF EXISTS customers CASCADE;

-- CREATE TABLE customers (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   payment_token char(8) NOT NULL UNIQUE CHECK (payment_token ~ '^[A-Z]{8}$')
-- );

-- CREATE TABLE services (
--   id serial PRIMARY KEY,
--   description text NOT NULL,
--   price numeric(10,2) NOT NULL CHECK (price >= 0.00)
-- );

-- CREATE TABLE customers_services (
--   id serial PRIMARY KEY,
--   customer_id integer REFERENCES customers(id) ON DELETE CASCADE,
--   service_id integer REFERENCES services(id),
--   UNIQUE (customer_id, service_id)
-- );

-- INSERT INTO customers (name, payment_token) VALUES
-- ('Pat Johnson',  'XHGOAHEQ'),
-- ('Nancy Monreal', 'JKWQPJKL'),
-- ('Lynn Blake',   'KLZXWEEE'),
-- ('Chen Ke-Hua',  'KWETYCVX'),
-- ('Scott Lakso',  'UUEAPQPS'),
-- ('Jim Pornot',   'XKJEYAZA');

-- INSERT INTO services (description, price) VALUES
-- ('Unix Hosting'        , 5.95),
-- ('DNS'                 , 4.95),
-- ('Whois Registration'  , 1.95),
-- ('High Bandwidth'      , 15.00),
-- ('Business Support'    , 250.00),
-- ('Dedicated Hosting'   , 50.00),
-- ('Bulk Email'          , 250.00),
-- ('One-to-one Training' , 999.00);


-- INSERT INTO customers_services (customer_id, service_id) VALUES
--   (1 , 1),
--   (1 , 2),
--   (1 , 3),
  
--   (3 , 1),
--   (3 , 2),
--   (3 , 3),
--   (3 , 4),
--   (3 , 5),
  
--   (4 , 1),
--   (4 , 4),

--   (5 , 1),
--   (5 , 2),
--   (5 , 6),

--   (6 , 1),
--   (6 , 6),
--   (6 , 7);

-- SELECT * FROM customers WHERE id IN (SELECT customer_id FROM customers_services);
-- SELECT * FROM customers WHERE id NOT IN (SELECT customer_id FROM customers_services);

-- SELECT customers.id, customers.name, customers.payment_token,
--        services.id, services.description, services.price
-- FROM customers
-- LEFT JOIN customers_services ON customer_id = customers.id
-- FULL JOIN services ON service_id = services.id
-- WHERE customers.name IS NULL OR services.description IS NULL;

-- SELECT services.description
-- FROM customers_services
-- RIGHT OUTER JOIN services ON service_id = services.id
-- WHERE customer_id IS NULL;

-- SELECT customers.name,
--        string_agg(services.description, ', ') AS services
-- FROM customers
-- LEFT JOIN customers_services ON customer_id = customers.id
-- LEFT JOIN services ON service_id = services.id
-- GROUP BY customers.id
-- ORDER BY customers.id;

-- SELECT services.description,
--        count(customer_id)
-- FROM customers_services
-- JOIN services ON service_id = services.id
-- GROUP BY service_id, services.description
-- HAVING count(customer_id) >= 3
-- ORDER BY count(customer_id);

-- SELECT sum(services.price) AS gross
-- FROM customers_services
-- JOIN services ON service_id = services.id;

-- INSERT INTO customers (name, payment_token) VALUES
--   ('John Doe',  'EYODHLCN');

-- INSERT INTO customers_services (customer_id, service_id) VALUES
--   (7, 1),
--   (7, 2),
--   (7, 3);

-- SELECT SUM(services.price)
-- FROM customers_services
-- JOIN services ON service_id = services.id
-- WHERE price > 100; 
-- -- service_id IN (SELECT id from services WHERE price > 100);

-- SELECT sum(price)
-- FROM customers CROSS JOIN services
-- WHERE price > 100;
-- -- services.id IN (SELECT id from services WHERE price > 100);

-- DELETE FROM customers_services WHERE service_id = 7;
-- DELETE FROM customers_services WHERE customer_id = 4;
-- DELETE FROM services WHERE description = 'Bulk Email';
-- DELETE FROM customers WHERE name = 'Chen Ke-Hua';