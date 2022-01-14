const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const {search} = require("./helpers/search");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })



const pool = require("./db");
const { rows } = require("pg/lib/defaults");
// middleware
app.use(cors());
app.use(express.json()); // req.bodu
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }))


app.get("/countries/:id", async (req, res) => {
  try {
    const treatiesByCountry = await pool.query(
      `SELECT countries.name AS country_name, treaties .* FROM countries INNER JOIN participation ON countries.id = participation.country_id INNER JOIN treaties ON participation.treaty_id = treaties.id WHERE countries.id = ${req.params.id}`
    );

    res.json(treatiesByCountry.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/countries", async (req, res) => {
  try {
    const countriesAll = await pool.query("select * from countries");
    res.json(countriesAll.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/topics/:id", async (req, res) => {
  try {
    const treatiesByTopic = await pool.query(
      `SELECT topics.name AS topic_name, treaties.* FROM treaties INNER JOIN treaties_by_topics ON treaties.id = treaties_by_topics.treaty_id INNER JOIN topics ON treaties_by_topics.topic_id = topics.id WHERE topics.id = ${req.params.id}`
    );
    res.json(treatiesByTopic.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/treaties/:id", async (req, res) => {
  try {
    const treaty = await pool.query(`SELECT treaties.id, treaties.name, treaties.concluded, treaties.city, treaties.entered_into_force, status, english_text.text FROM treaties INNER JOIN english_text ON treaties.id = english_text.treaty_id WHERE treaties.id = ${req.params.id}`);
    res.json(treaty.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/treaties/", async (req, res) => {
  try {
    const treatiesAll = await pool.query(`SELECT * FROM treaties`);
    res.json(treatiesAll.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/topics", async (req, res) => {
  try {
    const topicsAll = await pool.query("SELECT * FROM topics");
    res.json(topicsAll.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/organizations/:id", async (req, res) => {
  try {
    const treaties = await pool.query(`SELECT treaties.* FROM treaties INNER JOIN treaties_by_organization ON treaties.id = treaties_by_organization.treaty_id WHERE organization_id = ${req.params.id}`);
    res.json(treaties.rows);
  } catch (err) {
    console.error(err.message);
  }

})

app.get("/organizations", async (req, res) => {
  try {
    let organizations = await pool.query("SELECT * FROM organizations");
    organizations = organizations.rows;
    let countOfTreaties = await pool.query("SELECT organization_id, count(*) FROM treaties_by_organization GROUP BY organization_id");
    countOfTreaties = countOfTreaties.rows;
    countOfTreaties.forEach(elem => {
      for(let i = 0; i < organizations.length; i++) {
        if(organizations[i].id === elem.organization_id) {
          console.log('sd')
          organizations[i].count = elem.count;
        }
      }
    })
    res.json(organizations);
  } catch (err) {
    console.error(err.message);
  }

})

app.get("/participation/:id", async (req, res) => {
  try {
    const participationByTreaty = await pool.query(
      `SELECT treaties.name AS treaty_name, treaties.city AS city, treaties.concluded AS concluded, treaties.entered_into_force AS treaty_entry_into_force, treaties.status AS treaty_status, countries.name AS country_name, participation.* FROM participation INNER JOIN treaties ON participation.treaty_id = treaties.id INNER JOIN countries ON participation.country_id = countries.id WHERE treaties.id = ${req.params.id}`
    );
    res.json(participationByTreaty.rows);
  } catch (err) {
    console.error(err.message);
  }
});
app.get("/count-treaties", async (req, res) => {
  try {
    const countTreatiesForCountry = await pool.query(
      `select countries.id, count(treaties) from countries inner join participation ON countries.id = participation.country_id inner join treaties ON treaties.id = participation.treaty_id group by countries.id`
    );
    res.json(countTreatiesForCountry.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/count-topics", async (req, res) => {
  try {
    const countTreatiesForTopic = await pool.query(
      `select topics.id, count(treaties) from topics inner join treaties_by_topics ON topics.id = treaties_by_topics.topic_id inner join treaties ON treaties.id = treaties_by_topics.treaty_id group by topics.id`
    );
    res.json(countTreatiesForTopic.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/participation", async (req, res) => {
  try {
    const participationAll = await pool.query("SELECT * FROM participation");
    res.json(participationAll.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/search/:keyword", urlencodedParser, async (req, res) => {
  try {
    const keyword = req.params.keyword.toLowerCase();
    console.log(keyword, "keyword from post request");
    const result = await search(keyword);
    res.json(result);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(4000, () => {
  console.log("Server has started on port 4000");
});
