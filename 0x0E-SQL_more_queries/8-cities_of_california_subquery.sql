-- lists all the cities of Clifonia that can be found in the database hbtn_0d_usa
SELECT id, name FROM cities WHERE state_id = (SELECT id FROM states WHERE name = 'Califonia') ORDER BY id ASC;
