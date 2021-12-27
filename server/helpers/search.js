const pool = require("../db");

const search = (keyword) => {
  return new Promise(async (resolve, reject) => {
    const result = {};
    const countries = await pool.query(
      `SELECT * FROM countries WHERE name ILIKE '${keyword}%'`
    );
    const treaties = await pool.query(
      `SELECT * FROM treaties WHERE name ILIKE '%${keyword}%'`
    );
    const topics = await pool.query(
      `SELECT * FROM topics WHERE name ILIKE '%${keyword}%'`
    );
    const cities = await pool.query(`SELECT * FROM treaties WHERE city ILIKE '%${keyword}%'`)
    result.countries = countries.rows;
    result.topics = topics.rows;
    result.treaties = treaties.rows;
    result.cities = cities.rows;
    resolve(result);
  });
};

exports.search = search;
