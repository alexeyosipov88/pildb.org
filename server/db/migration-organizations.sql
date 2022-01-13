DROP TABLE IF EXISTS organizations CASCADE;
DROP TABLE IF EXISTS treaties_by_organization CASCADE;


CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR (250) NOT NULL
);


CREATE TABLE treaties_by_organization (
  id SERIAL PRIMARY KEY NOT NULL,
  organization_id INTEGER REFERENCES organizations(id) ON DELETE CASCADE,
  treaty_id INTEGER REFERENCES treaties(id) ON DELETE CASCADE
);