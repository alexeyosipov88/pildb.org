const pool = require("../db");

const search = (keyword) => {
  return new Promise(async (resolve, reject) => {
    const result = {};
    const organizations = await pool.query(
      `SELECT * FROM organizations WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`, [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]);
    const text = await pool.query(
      `SELECT english_text.*, treaties.name FROM english_text INNER JOIN treaties ON treaties.id = english_text.treaty_id WHERE text ILIKE $1 OR text ILIKE $2 OR text ILIKE $3`, [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
    );
    const countries = await pool.query(
      `SELECT * FROM countries WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`, [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
    );
    const treaties = await pool.query(
      `SELECT * FROM treaties WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`, [`${keyword}%` ,`% ${keyword}%`, `%(${keyword})%`]
    );
    const topics = await pool.query(
      `SELECT * FROM topics WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`, [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
    );
    const cities = await pool.query(
      `SELECT * FROM treaties WHERE city ILIKE $1 OR city ILIKE $2 OR city ILIKE $3`, [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
    );
    result.text = text.rows;
    result.organizations = organizations.rows;
    result.countries = countries.rows;
    result.topics = topics.rows;
    result.treaties = treaties.rows;
    result.cities = cities.rows;
    resolve(result);
  });
};

exports.search = search;
