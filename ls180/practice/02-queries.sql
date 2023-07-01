/* for reference */
SELECT * FROM eat_entries;
SELECT * FROM recipes;
SELECT * FROM foods;
SELECT * FROM foods_recipes;


/* 1. each recipe with all food ingredients */
  SELECT recipes.name AS recipe_name, foods.name AS ingredient, food_portion, food_portion_unit
    FROM foods_recipes
    JOIN foods ON foods_recipes.food_id = foods.id
    JOIN recipes ON foods_recipes.recipe_id = recipes.id
ORDER BY foods_recipes.recipe_id;

/* 1. each recipe with all food ingredients USING SUBQUERIES 
  SELECT (SELECT name FROM recipes WHERE recipe_id = id) AS recipe_name,
         (SELECT name FROM foods WHERE food_id = id) AS ingredient,
         food_portion,
         food_portion_unit
    FROM foods_recipes
ORDER BY recipe_id;

*/

/* 2. summary (totals) of foods eaten each day */
  SELECT eat_entries.entry_date,
         foods.name,
         sum(food_portion),
         food_portion_unit
    FROM eat_entries
    JOIN foods ON eat_entries.food_id = foods.id
GROUP BY entry_date, foods.name, food_portion_unit
ORDER BY entry_date;

/* 2. summary (totals) of foods eaten each day USING SUBQUERIES 
  SELECT entry_date,
         (SELECT name FROM foods WHERE food_id = id),
         sum(food_portion),
         food_portion_unit
    FROM eat_entries
GROUP BY entry_date, food_id, food_portion_unit
ORDER BY entry_date;

*/

/* Comparing #1 */
EXPLAIN ANALYZE
  SELECT recipes.name AS recipe_name, foods.name AS ingredient, food_portion, food_portion_unit
    FROM foods_recipes
    JOIN foods ON foods_recipes.food_id = foods.id
    JOIN recipes ON foods_recipes.recipe_id = recipes.id
ORDER BY foods_recipes.recipe_id;

EXPLAIN ANALYZE
  SELECT (SELECT name FROM recipes WHERE recipe_id = id) AS recipe_name,
         (SELECT name FROM foods WHERE food_id = id) AS ingredient,
         food_portion,
         food_portion_unit
    FROM foods_recipes
ORDER BY recipe_id;

/* Comparing #2 */
EXPLAIN ANALYZE
  SELECT eat_entries.entry_date,
         foods.name,
         sum(food_portion),
         food_portion_unit
    FROM eat_entries
    JOIN foods ON eat_entries.food_id = foods.id
GROUP BY entry_date, foods.name, food_portion_unit
ORDER BY entry_date;

EXPLAIN ANALYZE
  SELECT entry_date,
         (SELECT name FROM foods WHERE food_id = id),
         sum(food_portion),
         food_portion_unit
    FROM eat_entries
GROUP BY entry_date, food_id, food_portion_unit
ORDER BY entry_date;
