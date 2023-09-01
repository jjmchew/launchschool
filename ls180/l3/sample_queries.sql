-- SELECT
--   events.name AS event,
--   starts_at,
--   sections.name AS "Section",
--   row,
--   seats.number AS seat
-- FROM
-- tickets
-- INNER JOIN events
--   ON tickets.event_id = events.id
-- INNER JOIN seats
--   ON tickets.seat_id = seats.id
-- INNER JOIN customers
--   ON tickets.customer_id = customers.id
-- JOIN sections ON seats.section_id = sections.id
-- WHERE customers.email = 'gennaro.rath@mcdermott.co'
-- ORDER BY event;

-- select * from sections
-- JOIN seats ON sections.id = seats.section_id

-- select * from seats
-- JOIN sections ON sections.id = seats.section_id

-- select customer_id, STRING_AGG(event_id::text, ', ') from tickets
-- GROUP BY customer_id;

-- select customer_id, count(event_id) from tickets
-- GROUP BY customer_id;

select
  customer_id,
  customers.email,
  count(DISTINCT tickets.event_id)
from tickets
JOIN customers ON customer_id = customers.id
GROUP BY customer_id, customers.email
HAVING count(DISTINCT tickets.event_id) = 3;


-- select count(id) from tickets;

-- customer, event_id
-- 1          1
-- 1          2
-- 2          1
-- 3          1