CREATE DATABASE scrumlove;
\c scrumlove;

CREATE TABLE "answer_set" (
  "id" serial PRIMARY KEY,
  "q1" integer,
  "q2" integer,
  "q3" integer,
  "q4" integer,
  "q5" integer,
  "q6" integer,
  "q7" integer,
  "q8" integer,
  "q9" integer,
  "q10" integer,
  "score" integer
);

CREATE TABLE "matches" (
  "id" serial PRIMARY KEY,
  "match1" integer,
  "match2" integer,
  "match3" integer,
  "match4" integer,
  "match5" integer,
  "match6" integer,
  "match7" integer,
  "match8" integer,
  "match9" integer,
  "match10" integer
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "answer_set_id" integer REFERENCES answer_set(id),
  "matches_id" integer REFERENCES matches(id),
  "full_name" varchar, 
  "email" varchar UNIQUE,
  "user_name" varchar UNIQUE,
  "password" varchar UNIQUE,
  "gender" varchar,
  "age" varchar
);

INSERT INTO ANSWER_SET (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, score)
VALUES(1,1,3,3,4,1,1,1,1,2,18),
(2, 2, 1, 3, 1, 1, 2, 1, 2, 1, 16),
(1, 1, 3, 2, 1, 2, 2, 2, 1, 2, 17),
(1,1,3,2,1,4,2,2,3,4,23),
(1,1,3,2,1,4,2,2,3,4,23)
;

INSERT INTO MATCHES (match1)
VALUES(1),
(1),
(1),
(4),
(3)
;

INSERT INTO USERS (full_name, email, user_name, password, gender, age)
VALUES('Chase Dudas','chase.dudas@colorado.edu','chase13','chase13','male','20'),
('Marissa Montano', 'marissa.montano@colorado.edu', 'mamo0245', 'mamo0245','female','20'),
('Bridget Murphy','bridget.murphy@colorado.edu','brmu8861','brmu8861','female','22'),
('Cort Sharp', 'cort.sharp@colorado.edu', 'cosh9552', 'cosh9552', 'male', '22'),
('Trevor Buck', 'trbu4810@colorado.edu', 'Trevor4Ever', 'Trevor4Ever', 'male', '23')
;
