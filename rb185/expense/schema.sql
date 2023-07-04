CREATE TABLE expenses (
  id serial PRIMARY KEY,
  amount numeric(6,2) NOT NULL CHECK (amount > 0),
  memo text NOT NULL,
  created_on date NOT NULL
);

INSERT INTO expenses (amount, memo, created_on) VALUES (14.56, 'Pencils', NOW());
INSERT INTO expenses (amount, memo, created_on) VALUES (3.29, 'Coffee', NOW());
INSERT INTO expenses (amount, memo, created_on) VALUES (49.99, 'Text Editor', NOW());
INSERT INTO expenses (amount, memo, created_on) VALUES
  (29.99, 'USB memory stick', NOW()),
  (13.49, 'Ice cream', NOW()),
  (160.45, 'Lift ticket', NOW()),
  (24.32, 'Climbing gym day pass', NOW());

