-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists plants;

CREATE table plants (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    latin_name VARCHAR NOT NULL,
    water_need VARCHAR NOT NULL,
    light_need VARCHAR NOT NULL,
    indoor BOOLEAN
);

INSERT INTO plants (name, latin_name, water_need, light_need, indoor) VALUES
('Spider Plant', 'Chlorophytum comosum', 'once a week', 'indirect sun', true),
('ZZ Plant', 'Zamioculcas', 'every 2-3 weeks', 'indirect sun', true),
('Heliotrope', 'Heliotropium arborescens', 'keep soil moist', 'direct sun', false),
('Sunflower', 'Helianthus', 'once a week', 'direct sun', false);