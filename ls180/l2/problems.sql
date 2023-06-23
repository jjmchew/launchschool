/* Problems from https://launchschool.com/lessons/a1779fd2/assignments/e5d34504 */

/* problem 4 */
SELECT split_part(email, '@', 2) FROM people LIMIT 10;
SELECT DISTINCT split_part(email, '@', 2) AS domain, count( split_part(email, '@', 2) ) FROM people GROUP BY split_part(email, '@', 2) ORDER BY count DESC;
SELECT split_part(email, '@', 2) AS domain, count(id) FROM people GROUP BY domain ORDER BY count DESC;
