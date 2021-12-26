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
    result.countries = countries.rows;
    result.treaties = treaties.rows;
    result.topics = topics.rows;
    resolve(result);
  });
};

exports.search = search;
