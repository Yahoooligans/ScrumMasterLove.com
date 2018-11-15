CREATE DATABASE scrumlove;
\c scrumlove;

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "answer_set_id" integer,
  "matches_id" integer,
  "full_name" varchar,
  "email" varchar UNIQUE,
  "user_name" varchar UNIQUE,
  "password" varchar UNIQUE,
  "gender" varchar,
  "date_of_birth" varchar,
  "age" integer
);

CREATE TABLE "answer_set" (
  "id" integer PRIMARY KEY,
  "q1" varchar,
  "q2" varchar,
  "q3" varchar,
  "q4" varchar,
  "q5" varchar,
  "q6" varchar,
  "q7" varchar,
  "q8" varchar,
  "q9" varchar,
  "q10" varchar,
  "score" integer
);

CREATE TABLE "matches" (
  "id" integer PRIMARY KEY,
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

INSERT INTO USERS
VALUES(1,1,1,'Chase Dudas','chase.dudas@colorado.edu','chase13','chase13','male','10/27/98','20'),
(2,2,2, 'Marissa Montano', 'marissa.montano@colorado.edu', 'mamo0245', 'mamo0245','female', '01/04/98','20'),
(3,3,3, 'Bridget Murphy','bridget.murphy@colorado.edu','brmu8861','brmu8861','female','03/04/96','22'),
(4,4,4,'Cort Sharp', 'cort.sharp@colorado.edu', 'cosh9552', 'cosh9552', 'male', '04/03/96', '22'),
(5,5,5, 'Trevor Buck', 'trbu4810@colorado.edu', 'Trevor4Ever', 'Trevor4Ever', 'male', '07/03/1995', '23')
;

INSERT INTO ANSWER_SET
VALUES(1,'a','a','c','c','d','a','a','a','','',0),
(2, 'b', 'b', 'a', 'c', 'a', 'a', 'b', 'a','','', 0),
(3, 'a','a','c','b','a','d','b','b','','',0),
(4, 'a','a','c','b','a','d','b','b','','',0),
(5, 'a','a','c','b','a','d','b','b','','',0)
;

INSERT INTO MATCHES(id)
VALUES(1),
(2),
(3),
(4),
(5)
;

SELECT * 
FROM USERS;

SELECT *
FROM ANSWER_SET;

SELECT *
FROM MATCHES;
