-- 13:56 start  14:29 finish (33 mins)

-- CREATE DATABASE auction;
-- \c auction

-- DROP TABLE IF EXISTS bids CASCADE;
-- DROP TABLE IF EXISTS bidders CASCADE;
-- DROP TABLE IF EXISTS items CASCADE;

-- CREATE TABLE bidders (
--   id serial PRIMARY KEY,
--   name text NOT NULL
-- );

-- CREATE TABLE items (
--   id serial PRIMARY KEY,
--   name text NOT NULL,
--   initial_price numeric(6,2) NOT NULL CHECK (initial_price BETWEEN 0.01 AND 1000.00),
--   sales_price numeric(6,2) CHECK (sales_price BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE TABLE bids (
--   id serial PRIMARY KEY,
--   bidder_id integer NOT NULL REFERENCES bidders(id) ON DELETE CASCADE,
--   item_id integer NOT NULL REFERENCES items(id) ON DELETE CASCADE,
--   amount numeric(6,2) NOT NULL CHECK (amount BETWEEN 0.01 AND 1000.00)
-- );

-- CREATE INDEX ON bids (bidder_id, item_id);

-- \copy bidders FROM '../l4/bidders.csv' WITH DELIMITER ',' CSV HEADER
-- \copy items FROM '../l4/items.csv' WITH DELIMITER ',' CSV HEADER
-- \copy bids FROM '../l4/bids.csv' WITH DELIMITER ',' CSV HEADER

-- SELECT name AS "Bid on Items"
-- FROM items
-- WHERE id IN (SELECT item_id FROM bids);

-- SELECT name AS "Not Bid On"
-- FROM items
-- WHERE id NOT IN (SELECT item_id FROM bids);

-- SELECT name
-- FROM bidders
-- WHERE id IN (SELECT DISTINCT bidder_id FROM bids);

-- SELECT name
-- FROM bidders
-- WHERE EXISTS (SELECT DISTINCT bidder_id FROM bids WHERE bidder_id = bidders.id);

-- SELECT MAX(count) FROM (SELECT count(id) FROM bids GROUP BY bidder_id) AS bids_count;

-- SELECT items.name, count(bids.id) 
-- FROM items
-- LEFT JOIN bids ON bids.item_id = items.id
-- GROUP BY items.name, items.id
-- ORDER BY items.id

-- SELECT items.name,
--        (SELECT count(bidder_id) FROM bids WHERE items.id = item_id) AS count
-- FROM items;

-- SELECT id FROM items 
-- WHERE ROW(name, initial_price, sales_price) = ROW('Painting', 100.00, 250.00);

-- EXPLAIN ANALYZE
-- SELECT name FROM bidders
-- WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);