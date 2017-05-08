\connect pgintro;

CREATE TABLE cities (
id SERIAL PRIMARY KEY,
name VARCHAR(63) ,
country VARCHAR(63) ,
rating integer 
);

INSERT INTO
  cities(name, country, rating)
VALUES 
('Ouagadougou', 'Burkina Faso', 9),
('Wellington', 'New Zealand', 9),
('Denver', 'United States', 6);

CREATE TABLE puppies (
id SERIAL PRIMARY KEY,
name VARCHAR(63) ,
breed VARCHAR(63)
);

INSERT INTO
  puppies(name, breed)
VALUES 
('Tramp', 'Maine Black Dog' ),
('Sammy', 'Mutt' ),
('Dylan', 'Yellow Lab' );

curl --data "name=Molly&breed=unknown" localhost:5000/api/puppies
curl -X "DELETE" localhost:5000/api/puppy/5
curl -X PUT -d field=breed -d value=mongrel localhost:5000/api/puppy/4


SELECT r.* c.descriptions as cuisine 
FROM restaurants r 
INNER JOIN cuisenes c ON ( r.id = c.restaurant_id )

SELECT restaurant_id, AVG(rating)
FROM ratings
GROUP BY restaurant_id

SELECT restaurant_id as rest_rate_id, AVG(rating) FROM ratings GROUP BY restaurant_id;

ORDER BY id ASC;


SELECT location_id 
FROM restaurants r 
  INNER JOIN locations l ON (l.id = r.location_id) 
  WHERE r.id = 1;
  
  
INSERT INTO locations
    ( city, state )
SELECT 1, 'John'
WHERE
    NOT EXISTS (
        SELECT id FROM locations WHERE city = city AND state = state
    );
    
    
        INSERT INTO locations ( city, state )\
          SELECT '" + city + "', '" + state + "' \
          WHERE NOT EXISTS ( SELECT id FROM locations WHERE city = '" + city + "' AND state = '" + state + "' ); \  
        UPDATE restaurants \
          SET location_id = ( SELECT id FROM locations WHERE city = '" + city + "' AND state = '" + state + "' ) \
          WHERE name = '" + name + "';\
          
          
          
          

