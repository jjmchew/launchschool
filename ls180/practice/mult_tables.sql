-- PRACTICE problems from : https://launchschool.com/lessons/5ae760fa/assignments/285d837e


-- CREATE DATABASE theatre;
-- \c theatre
-- \i '../l3/theater_full.sql'

-- SELECT COUNT(id) FROM tickets;

SELECT * FROM tickets LIMIT 5;
SELECT * FROM events LIMIT 5;
SELECT * FROM customers LIMIT 5;
SELECT * FROM sections LIMIT 5;
SELECT * FROM seats LIMIT 5;

-- SELECT count(DISTINCT customer_id) FROM tickets;
-- SELECT count(customer_id) FROM (SELECT customer_id FROM tickets GROUP BY customer_id) AS customer_grouped;


-- SELECT * FROM customers LIMIT 10;
-- SELECT count(id) FROM customers;


-- SELECT round((SELECT count(DISTINCT customer_id) FROM tickets)::numeric / (SELECT count(id) FROM customers)::numeric * 100, 2) AS percent;

-- SELECT round(
--          count(DISTINCT customer_id)::numeric /
--          count(DISTINCT customers.id)::numeric * 100,
--          2
--        ) AS percent
-- FROM customers
-- LEFT JOIN tickets ON customers.id = customer_id;

-- SELECT name,
--        count(event_id) AS popularity
-- FROM tickets
-- JOIN events ON event_id = events.id
-- GROUP BY events.name
-- ORDER BY popularity DESC;

-- SELECT customers.id,
--        customers.email,
--        count(DISTINCT event_id)
-- FROM tickets 
-- JOIN customers ON customer_id = customers.id
-- GROUP BY customers.id
-- HAVING count(DISTINCT event_id) = 3;

-- SELECT events.name AS event,
--        events.starts_at,
--        sections.name AS section,
--        seats.row,
--        seats.number AS seat
--   FROM tickets
--   JOIN customers ON customer_id = customers.id
--   JOIN events ON event_id = events.id
--   JOIN seats ON seat_id = seats.id
--   JOIN sections ON section_id = sections.id
--  WHERE customers.email = 'gennaro.rath@mcdermott.co';