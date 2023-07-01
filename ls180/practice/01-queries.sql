/* double-check total hours worked */
SELECT *, end_time - start_time AS "Duration" FROM entries;


/* total hours worked */
SELECT sum(end_time - start_time) AS "Total time worked" FROM entries;


/* summarize total hrs worked per day */
  SELECT make_date( extract(year from start_time)::integer,
                    extract(month from start_time)::integer,
                    extract(day from start_time)::integer
                  ) AS day,
         sum(end_time - start_time) AS hours_worked
    FROM entries
GROUP BY day
ORDER BY day;


/* Total hrs per project (client) */
SELECT projects.name AS project_name,
       clients.name AS client_name,
       sum(end_time - start_time) AS total_hours_worked
FROM entries 
JOIN projects ON entries.project_id = projects.id
JOIN clients ON projects.client_id = clients.id
GROUP BY project_id, projects.name, clients.name
ORDER BY project_id;


/* Total hrs per project (client) per day */
SELECT make_date( extract(year from start_time)::integer,
                  extract(month from start_time)::integer,
                  extract(day from start_time)::integer
                ) AS day,
       projects.name AS project_name,
       clients.name AS client_name,
       sum(end_time - start_time) AS hours_worked
FROM entries 
JOIN projects ON entries.project_id = projects.id
JOIN clients ON projects.client_id = clients.id
GROUP BY day, project_name, client_name
ORDER BY day;


/* Total hrs per project (client) USING SUBQUERIES - Slower */
SELECT (SELECT name FROM projects WHERE project_id = id) AS project_name,
       (SELECT name FROM clients WHERE clients.id = (
          SELECT client_id FROM projects WHERE project_id = id
       ) ) AS client_name,
       sum(end_time - start_time) AS total_hours_worked
FROM entries
GROUP BY project_id
ORDER BY project_id;


/* Total hrs per project (client) per day USING SUBQUERIES - Faster */
SELECT make_date( extract(year from start_time)::integer,
                  extract(month from start_time)::integer,
                  extract(day from start_time)::integer
                ) AS day,
       (SELECT name FROM projects WHERE project_id = id) AS project_name,
       (SELECT name FROM clients WHERE clients.id = (
          SELECT client_id FROM projects WHERE project_id = id
       ) ) AS client_name,
       sum(end_time - start_time) AS hours_worked
FROM entries
GROUP BY project_id, day
ORDER BY day, project_id;


/* Comparing total hrs per project */
EXPLAIN ANALYZE
SELECT projects.name AS project_name,
       clients.name AS client_name,
       sum(end_time - start_time) AS total_hours_worked
FROM entries 
JOIN projects ON entries.project_id = projects.id
JOIN clients ON projects.client_id = clients.id
GROUP BY project_id, projects.name, clients.name
ORDER BY project_id;

EXPLAIN ANALYZE
SELECT (SELECT name FROM projects WHERE project_id = id) AS project_name,
       (SELECT name FROM clients WHERE clients.id = (
          SELECT client_id FROM projects WHERE project_id = id
       ) ) AS client_name,
       sum(end_time - start_time) AS total_hours_worked
FROM entries
GROUP BY project_id
ORDER BY project_id;



/* Comparing total hrs per project per day */
EXPLAIN ANALYZE
SELECT make_date( extract(year from start_time)::integer,
                  extract(month from start_time)::integer,
                  extract(day from start_time)::integer
                ) AS day,
       projects.name AS project_name,
       clients.name AS client_name,
       sum(end_time - start_time) AS hours_worked
FROM entries 
JOIN projects ON entries.project_id = projects.id
JOIN clients ON projects.client_id = clients.id
GROUP BY day, project_name, client_name
ORDER BY day;

EXPLAIN ANALYZE
SELECT make_date( extract(year from start_time)::integer,
                  extract(month from start_time)::integer,
                  extract(day from start_time)::integer
                ) AS day,
       (SELECT name FROM projects WHERE project_id = id) AS project_name,
       (SELECT name FROM clients WHERE clients.id = (
          SELECT client_id FROM projects WHERE project_id = id
       ) ) AS client_name,
       sum(end_time - start_time) AS hours_worked
FROM entries
GROUP BY project_id, day
ORDER BY day, project_id;
