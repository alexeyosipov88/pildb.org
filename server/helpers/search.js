const pool = require("../db");

const getUniqueArrayFromSearchResults = (arr) => {
  let uniqueIds = [];
  let result = arr.filter((elem) => {
    if (uniqueIds.includes(elem.id)) {
      return false;
    }
    uniqueIds.push(elem.id);
    return true;
  });
  return result;
};

const getFromMultipleKeywods = (keyword, callback) => {
  return new Promise((resolve) => {
    keyword = keyword.split(/\s/);
    const promiseForQuery = (keyword, callback) => {
      return new Promise((resolve) => {
        resolve(callback(keyword));
      });
    };
    const arrOfPromises = [];
    for (let i = 0; i < keyword.length; i++) {
      arrOfPromises.push(promiseForQuery(keyword[i], callback));
    }
    Promise.all(arrOfPromises).then((values) => {
      let finalArrOfResults = [];
      values = values.map((elem) => {
        return elem.rows;
      });
      for (let i = 0; i < values.length; i++) {
        if (values.length < 2) {
          finalArrOfResults.push(values[i]);
        } else {
          for (let j = 0; j < values[i].length; j++) {
            let check = true;
            for (let k = i + 1; k < values.length; k++) {
              let idOfResults = values[k].map((elem) => elem.id);
              if (!idOfResults.includes(values[i][j].id)) {
                check = false;
              }
            }
            for (let k = i - 1; k >= 0; k--) {
              let idOfResults = values[k].map((elem) => elem.id);
              if (!idOfResults.includes(values[i][j].id)) {
                check = false;
              }
            }
            if (check) finalArrOfResults.push(values[i][j]);
          }
        }
      }

      finalArrOfResults =
        getUniqueArrayFromSearchResults(finalArrOfResults).flat();

      resolve(finalArrOfResults);
    });
  });
};

const search = (keyword) => {
  return new Promise(async (resolve, reject) => {
    const result = {};
    const organizations = await getFromMultipleKeywods(
      keyword,
      async (keyword) => {
        return await pool.query(
          `SELECT * FROM organizations WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3 OR name ILIKE $4 OR name ILIKE $5 OR name ILIKE $6`,
          [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `${keyword}`, `% ${keyword}_%`]
        );
      }
    );

    const text = await getFromMultipleKeywods(keyword, async (keyword) => {
      return await pool.query(
        `SELECT english_text.*, treaties.name FROM english_text INNER JOIN treaties ON treaties.id = english_text.treaty_id WHERE text ILIKE $1 OR text ILIKE $2 OR text ILIKE $3 OR text ILIKE $4 OR text ILIKE $5`,
        [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `% ${keyword}_%`]
      );
    });

    const countries = await getFromMultipleKeywods(keyword, async (keyword) => {
      return await pool.query(
        `SELECT * FROM countries WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3 OR name ILIKE $4 OR name ILIKE $5 OR name ILIKE $6`,
        [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `${keyword}`, `% ${keyword}_%`]
      );
    });

    const treaties = await getFromMultipleKeywods(keyword, async (keyword) => {
      return await pool.query(
        `SELECT * FROM treaties WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3 OR name ILIKE $4 OR name ILIKE $5 OR name ILIKE $6`,
        [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `${keyword}`, `% ${keyword}_%`]
      );
    });

    const topics = await getFromMultipleKeywods(keyword, async (keyword) => {
      return await pool.query(
        `SELECT * FROM topics WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3 OR name ILIKE $4 OR name ILIKE $5 OR name ILIKE $6`,
        [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `${keyword}`, `% ${keyword}_%`]
      );
    });

    const cities = await getFromMultipleKeywods(keyword, async (keyword) => {
      return await pool.query(
        `SELECT * FROM treaties WHERE city ILIKE $1 OR city ILIKE $2 OR city ILIKE $3 OR name ILIKE $4 OR name ILIKE $5 OR name ILIKE $6`,
        [`${keyword} %`, `% ${keyword}`, `% ${keyword} %`, `%(${keyword})%`, `${keyword}`, `% ${keyword}_%`]
      );
    });

    result.text = text;
    result.organizations = organizations;
    result.countries = countries;
    result.topics = topics;
    result.treaties = treaties;
    result.cities = cities;
    resolve(result);
  });
};

exports.search = search;

// const organizations = await pool.query(
//   `SELECT * FROM organizations WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );
// const text = await pool.query(
//   `SELECT english_text.*, treaties.name FROM english_text INNER JOIN treaties ON treaties.id = english_text.treaty_id WHERE text ILIKE $1 OR text ILIKE $2 OR text ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );
// const countries = await pool.query(
//   `SELECT * FROM countries WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );
// const treaties = await pool.query(
//   `SELECT * FROM treaties WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );
// const topics = await pool.query(
//   `SELECT * FROM topics WHERE name ILIKE $1 OR name ILIKE $2 OR name ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );
// const cities = await pool.query(
//   `SELECT * FROM treaties WHERE city ILIKE $1 OR city ILIKE $2 OR city ILIKE $3`,
//   [`${keyword}%`, `% ${keyword}%`, `%(${keyword})%`]
// );

// result.text = text.rows;
// result.organizations = organizations.rows;
// result.countries = countries.rows;
// result.topics = topics.rows;
// result.treaties = treaties.rows;
// result.cities = cities.rows;
