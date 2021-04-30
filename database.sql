-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

--Database name
shopping_list

--table
CREATE TABLE "item" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (80) NOT NULL,
	"quantity" INTEGER NOT NULL,
	"unit" VARCHAR (20),
	"purchased" BOOLEAN DEFAULT FALSE
);

--test data
INSERT INTO "item" ("name", "quantity", "unit") 
VALUES ('Apples', 5, 'lbs'),
('Bread', 1, 'loaf'),
('Milk', 1, 'gallon'),
('Sliced Almonds', 2, 'cups'),
('Bananas', 1, 'bunch');

--get Query

--post Query

--edit Query

--delete Query