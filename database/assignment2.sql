SELECT * FROM classification;
SELECT * FROM classification WHERE classification_id = 2;
UPDATE classification SET classification_name = 'Minivan' WHERE classification_id = 5;
SELECT * FROM classification;


INSERT INTO  account (account_firstname,account_lastname,account_email,account_password) 
    VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');


UPDATE account SET account_type = 'Admin' WHERE account_id = 1;


DELETE FROM account WHERE account_firstname = 'Tony';


UPDATE 
   inventory
SET 
   inv_description (inv_description, 'small interiors', 'a huge interior') WHERE inv_make = 'GM';


SELECT
    inv_make,
    inv_model
FROM
    inventory WHERE classification_id = 2;


UPDATE 
   inventory
SET 
   inv_image = REPLACE (inv_image, '/images', '/images/vehicles'),
   inv_thumbnail = REPLACE (inv_thumbnail, '/images', '/images/vehicles');