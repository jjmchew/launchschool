DROP TABLE IF EXISTS entries CASCADE;
DROP TABLE IF EXISTS projects CASCADE;
DROP TABLE IF EXISTS clients CASCADE;

CREATE TABLE clients (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE CHECK (name <> '')
);

CREATE TABLE projects (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE CHECK (name <> ''),
  client_id integer NOT NULL REFERENCES clients(id) ON DELETE CASCADE
);

CREATE TABLE entries (
  id serial PRIMARY KEY,
  project_id integer NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  start_time timestamp NOT NULL,
  end_time timestamp NOT NULL,
  CHECK (end_time > start_time)
);

INSERT INTO clients 
            (name) 
     VALUES ('companyA'),
            ('clientB'),
            ('this guy');

INSERT INTO projects
            (client_id, name)
     VALUES (1, 'important project'),
            (1, 'not so important'),
            (1, 'finished project'),
            (3, 'small work');

       COPY entries (project_id, start_time, end_time)
       FROM '/home/jjmchew/launchschool/ls180/practice/01-entries.csv'
            (FORMAT csv, DELIMITER ',', HEADER);
