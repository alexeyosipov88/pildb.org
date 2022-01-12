const pool = require("../db");

const search = (keyword) => {
  return new Promise(async (resolve, reject) => {
    const result = {};
    const text = await pool.query(`SELECT english_text.*, treaties.name FROM english_text INNER JOIN treaties ON treaties.id = english_text.treaty_id WHERE text ILIKE '${keyword}%' OR text ILIKE '% ${keyword}%'`);
    const countries = await pool.query(
      `SELECT * FROM countries WHERE name ILIKE '${keyword}%' OR name ILIKE '% ${keyword}%'`
    );
    const treaties = await pool.query(
      `SELECT * FROM treaties WHERE name ILIKE '${keyword}%' OR name ILIKE '% ${keyword}%'`
    );
    const topics = await pool.query(
      `SELECT * FROM topics WHERE name ILIKE '${keyword}%' OR name ILIKE '% ${keyword}%'`
    );
    const cities = await pool.query(`SELECT * FROM treaties WHERE city ILIKE '${keyword}%' OR city ILIKE '% ${keyword}%'`);
    result.text = text.rows;
    console.log(result.text)
    result.countries = countries.rows;
    result.topics = topics.rows;
    result.treaties = treaties.rows;
    result.cities = cities.rows;
    resolve(result);
  });
};

exports.search = search;
