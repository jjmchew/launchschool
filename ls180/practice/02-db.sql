DROP TABLE IF EXISTS recipes CASCADE;
DROP TABLE IF EXISTS foods CASCADE;
DROP TABLE IF EXISTS eat_entries CASCADE;
DROP TABLE IF EXISTS foods_recipes;

CREATE TABLE recipes (
  id serial PRIMARY KEY,
  name text NOT NULL CHECK (name <> ''),
  created date DEFAULT CURRENT_DATE
);

CREATE TABLE foods (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE CHECK (name <> ''),
  recipe_id integer REFERENCES recipes(id) ON DELETE CASCADE,
  serving integer CHECK (serving > 0),
  serving_unit varchar(10) NOT NULL,
  calories integer CHECK (calories > 0),
  fat numeric CHECK (fat > 0.0),
  fat_unit varchar(10) NOT NULL
);

CREATE TABLE foods_recipes (
  id serial PRIMARY KEY,
  recipe_id integer NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
  food_id integer NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
  food_portion numeric NOT NULL CHECK (food_portion > 0.0),
  food_portion_unit varchar(10) NOT NULL
);

CREATE TABLE eat_entries (
  id serial PRIMARY KEY,
  entry_date date DEFAULT CURRENT_DATE,
  note text,
  food_id integer NOT NULL REFERENCES foods(id) ON DELETE CASCADE,
  food_portion numeric NOT NULL CHECK (food_portion > 0.0),
  food_portion_unit varchar(10) NOT NULL
);

INSERT INTO foods 
            (name, serving, serving_unit, calories, fat, fat_unit)
     VALUES ('white rice', 158, 'g', 205, 0.4, 'g'),
            ('brown rice', 98, 'g', 109, 0.8, 'g'),
            ('apple', 100, 'g', 52, 0.2, 'g');

INSERT INTO eat_entries
            (entry_date, note, food_id, food_portion, food_portion_unit)
     VALUES ('2023-06-23', 'breakfast', 2, 150, 'g'),
            ('2023-06-23', 'breakfast', 3, 102, 'g'),
            ('2023-06-23', 'lunch', 1, 158, 'g'),
            ('2023-06-23', 'dinner', 2, 200, 'g'),
            ('2023-06-23', 'dinner', 1, 200, 'g'),
            ('2023-06-23', 'dinner', 3, 150, 'g'),
            ('2023-06-24', 'breakfast', 2, 100, 'g'),
            ('2023-06-24', 'lunch', 1, 130, 'g'),
            ('2023-06-24', 'dinner', 2, 230, 'g');

INSERT INTO recipes
            (name, created)
     VALUES ('rice mix', '2023-06-24'),
            ('apple rice','2023-06-25');

INSERT INTO foods_recipes
            (recipe_id, food_id, food_portion, food_portion_unit)
     VALUES (1, 1, 100, 'g'),
            (1, 2, 150, 'g'),
            (2, 1, 50, 'g'),
            (2, 3, 50, 'g');
