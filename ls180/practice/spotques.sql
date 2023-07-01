-- CREATE TABLE example(
-- 	some_num numeric(10,2)
-- );

-- INSERT INTO example (some_num) VALUES (1);

-- CREATE TABLE example(
-- 	some_num int,
-- 	some_text text CHECK (some_text > 0)
-- );

-- INSERT INTO example (some_num)
-- 	VALUES (11);

-- DROP TABLE IF EXISTS example;

-- CREATE TABLE example (
-- 	id serial PRIMARY KEY,
-- 	title varchar(200) NOT NULL UNIQUE,
-- 	name char(100), 
-- 	age numeric NOT NULL
-- );

-- CREATE TABLE teachers (
-- 	id serial PRIMARY KEY,
-- 	name text
-- );

-- CREATE TABLE classes (
-- 	id serial PRIMARY KEY,
-- 	name text,
-- 	teacher_id int REFERENCES teachers (id) 
-- 		ON DELETE CASCADE
-- );

-- SELECT teachers.name
-- 	FROM teachers
-- 		JOIN classes
-- 			ON teachers.id = classes.teacher_id
-- 				GROUP BY teachers.name
-- 					ORDER BY COUNT(classes.id);

-- DROP TABLE IF EXISTS teachers CASCADE;

-- CREATE TABLE teachers (
--   set_up_date text
-- );

-- ALTER TABLE teachers ALTER COLUMN set_up_date TYPE date USING set_up_date::date;

-- CREATE TABLE authors (
--   id serial PRIMARY KEY,
--   name varchar(100) NOT NULL
-- );

-- CREATE TABLE books (
--   id serial PRIMARY KEY,
--   title varchar(100) NOT NULL,
--   isbn char(13) UNIQUE NOT NULL,
--   author_id int REFERENCES authors(id)
-- );


-- CREATE TABLE schedule (year integer);
-- INSERT INTO schedule (year) VALUES (2009), (2010), (2011), (2012);

-- CREATE TABLE schedule (year date);
-- INSERT INTO schedule (year) VALUES ('2009-06-01'), ('2010-06-01'), ('2011-06-01'), ('2012-06-01');

-- SELECT year FROM schedule WHERE year > 2010;

-- CREATE TABLE temp (full_name text);
-- INSERT INTO temp (full_name) VALUES ('jimmy'), ('johAnSon'), ('johanson..'), ('Johanson Branson'), ('Eva B. Johanson');

-- SELECT full_name FROM temp WHERE full_name ILIKE '%Johanson';

-- DROP TABLE IF EXISTS users;
-- CREATE TABLE users (full_name text, age integer, participated boolean);
-- INSERT INTO users (full_name, age, participated) VALUES
--   ('Ann', 13, true),
--   ('Ben', 12, NULL),
--   ('Emma', 15, false),
--   ('Kat', 12, 'f');

-- SELECT string_agg(users.full_name, ', '), age FROM users GROUP BY age;

-- DROP TABLE IF EXISTS students;
-- DROP TABLE IF EXISTS classes;

-- CREATE TABLE students (id serial, name text, year_of_birth date, class text);
-- INSERT INTO students (name, year_of_birth, class) VALUES
--   ('Eddie', '1986-01-01','Math'),
--   ('Maggie','1975-04-11','History'),
--   ('Elenore','1995-03-13','French');
-- SELECT name FROM students WHERE date_part('month', year_of_birth) = 4;
-- SELECT name FROM students WHERE date_part('month', year_of_birth) = 4 AND date_part('day', year_of_birth) = 11;
-- SELECT name FROM students WHERE date_part('year', year_of_birth) = 1986;
-- SELECT name FROM students WHERE year_of_birth = (SELECT min(year_of_birth) FROM students);
-- SELECT name FROM students ORDER BY year_of_birth ASC LIMIT 1;

-- DELETE FROM students;

-- CREATE TABLE classes (id serial PRIMARY KEY, name text);
-- INSERT INTO classes (name) VALUES ('Math'), ('History'), ('French');

-- ALTER TABLE students ADD COLUMN class_id integer REFERENCES classes(id);
-- UPDATE students SET class_id = 1 WHERE class = 'Math';
-- UPDATE students SET class_id = 2 WHERE class = 'History';
-- UPDATE students SET class_id = 3 WHERE class = 'French';

-- ALTER TABLE students DROP COLUMN class;
-- ALTER TABLE students ALTER COLUMN class_id SET NOT NULL;

-- DROP TABLE IF EXISTS orders CASCADE;
-- DROP TABLE IF EXISTS customers CASCADE;

-- CREATE TABLE customers (customer_id serial UNIQUE, name text);
-- INSERT INTO customers (name) VALUES
--   ('Johny'),
--   ('Ben'),
--   ('Gary');

-- CREATE TABLE orders (
--   order_id serial NOT NULL PRIMARY KEY, 
--   customer_id integer REFERENCES customers(customer_id), 
--   orders text
-- );

-- INSERT INTO orders (customer_id, orders) VALUES
--   (1, 'book'),
--   (2, 'mug'),
--   (3, 'chair');

-- DELETE FROM customers WHERE customer_id = 3;

