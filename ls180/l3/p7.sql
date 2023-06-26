/* Problem 7 from https://launchschool.com/lessons/5ae760fa/assignments/285d837e */
SELECT 
  e.name AS event, 
  e.starts_at, 
  sc.name AS section,
  s.row, 
  s.number AS seat 
FROM tickets t 
JOIN customers c ON t.customer_id = c.id 
JOIN events e ON t.event_id = e.id 
JOIN seats s ON t.seat_id = s.id
JOIN sections sc ON s.section_id = sc.id

WHERE c.email = 'gennaro.rath@mcdermott.co';
