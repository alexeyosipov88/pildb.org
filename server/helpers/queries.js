const pool = require("../db");

const getTreatiesByCountry = (id) => {
  return new Promise(async (resolve, reject) => {
    const treatiesByCountry = await pool.query(
      `SELECT countries.name AS country_name, treaties .* FROM countries INNER JOIN participation ON countries.id = participation.country_id INNER JOIN treaties ON participation.treaty_id = treaties.id WHERE countries.id = $1`,
      [id]
    );
    resolve(treatiesByCountry.rows);
  });
};

const getCountries = () => {
  return new Promise(async (resolve, reject) => {
    const countries = await pool.query("SELECT * FROM COUNTRIES");
    resolve(countries.rows);
  });
};

const getTreaties = () => {
  return new Promise(async (resolve, reject) => {
    const treaties = await pool.query(`SELECT * FROM treaties`);
    resolve(treaties.rows);
  });
};

const getTreatiesByTopic = (id) => {
  return new Promise(async (resolve, reject) => {
    const treaties = await pool.query(
      `SELECT topics.name AS topic_name, treaties.* FROM treaties INNER JOIN treaties_by_topics ON treaties.id = treaties_by_topics.treaty_id INNER JOIN topics ON treaties_by_topics.topic_id = topics.id WHERE topics.id = $1`,
      [id]
    );
    resolve(treaties.rows);
  });
};

const getTreatiesByOrganization = (id) => {
  return new Promise(async (resolve, reject) => {
    const treaties = await pool.query(
      `SELECT treaties.* FROM treaties INNER JOIN treaties_by_organization ON treaties.id = treaties_by_organization.treaty_id WHERE organization_id = $1`,
      [id]
    );
    resolve(treaties.rows);
  });
};

const getTreatyByName = (id) => {
  return new Promise(async (resolve, reject) => {
    const treaty = await pool.query(
      `SELECT treaties.id, treaties.name, treaties.concluded, treaties.city, treaties.entered_into_force, status, english_text.text FROM treaties INNER JOIN english_text ON treaties.id = english_text.treaty_id WHERE treaties.id = $1`,
      [id]
    );
    resolve(treaty.rows);
  });
};

const getTopics = () => {
  return new Promise(async (resolve, reject) => {
    const topics = await pool.query("SELECT * FROM topics");
    resolve(topics.rows);
  });
};

const getOrganizations = () => {
  return new Promise(async (resolve, reject) => {
    let organizations = await pool.query("SELECT * FROM organizations");
    organizations = organizations.rows;
    let countOfTreaties = await pool.query(
      "SELECT organization_id, count(*) FROM treaties_by_organization GROUP BY organization_id"
    );
    countOfTreaties = countOfTreaties.rows;
    countOfTreaties.forEach((elem) => {
      for (let i = 0; i < organizations.length; i++) {
        if (organizations[i].id === elem.organization_id) {
          organizations[i].count = elem.count;
        }
      }
    });
    resolve(organizations);
  });
};

const getEnglishText = (id) => {
  return new Promise(async (resolve, reject) => {
    const text = await pool.query(`SELECT treaties.*, english_text.text FROM treaties INNER JOIN english_text ON treaties.id = english_text.treaty_id WHERE treaties.id = $1`, [id]);
    
    resolve(text.rows);
  })

}

const getParticipationByTreaty = (id) => {
  return new Promise(async (resolve, reject) => {
    const participationByTreaty = await pool.query(
      `SELECT treaties.name AS treaty_name, treaties.city AS city, treaties.concluded AS concluded, treaties.entered_into_force AS treaty_entry_into_force, treaties.status AS treaty_status, countries.name AS country_name, participation.* FROM participation INNER JOIN treaties ON participation.treaty_id = treaties.id INNER JOIN countries ON participation.country_id = countries.id WHERE treaties.id = $1`,
      [id]
    );
    resolve(participationByTreaty.rows);
  });
};


const getTreatiesAmountByCountry = () => {
  return new Promise(async (resolve, reject) => {
    const amount = await pool.query(
      `select countries.id, count(treaties) from countries inner join participation ON countries.id = participation.country_id inner join treaties ON treaties.id = participation.treaty_id group by countries.id`
    );
    resolve(amount.rows);
  });


}

const getTreatiesAmountByTopic = () => {
  return new Promise(async (resolve, reject) => {
    const amount = await pool.query(
      `select topics.id, count(treaties) from topics inner join treaties_by_topics ON topics.id = treaties_by_topics.topic_id inner join treaties ON treaties.id = treaties_by_topics.treaty_id group by topics.id`
    );
    resolve(amount.rows);
  });


}


module.exports = {
  getTreatiesByCountry,
  getCountries,
  getTreatiesByTopic,
  getTreatyByName,
  getTreaties,
  getTopics,
  getTreatiesByOrganization,
  getOrganizations,
  getParticipationByTreaty,
  getTreatiesAmountByCountry, getTreatiesAmountByTopic, getEnglishText
};
