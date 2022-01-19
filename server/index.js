require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { search } = require("./helpers/search");
const bodyParser = require("body-parser");
const api = require('./api/api');
const port = process.env.PORT || 4000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const {
  getTreatiesByCountry,
  getCountries,
  getTreatiesByTopic,
  getTreatyByName,
  getTreaties,
  getTopics,
  getTreatiesByOrganization,
  getOrganizations,
  getParticipationByTreaty, getTreatiesAmountByCountry, getTreatiesAmountByTopic
} = require("./helpers/queries");

const pool = require("./db");
// const { rows } = require("pg/lib/defaults");
// middleware
app.use(cors());
app.use(express.json()); // req.bodu
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);




app.get("/countries/:id", async (req, res) => {
  try {
    const treatiesByCountry = await getTreatiesByCountry(req.params.id);
    res.json(treatiesByCountry);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/countries", async (req, res) => {
  try {
    const countriesAll = await getCountries();
    console.log(countriesAll);
    res.json(countriesAll);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/topics/:id", async (req, res) => {
  try {
    // const treatiesByTopic = await pool.query(
    //   `SELECT topics.name AS topic_name, treaties.* FROM treaties INNER JOIN treaties_by_topics ON treaties.id = treaties_by_topics.treaty_id INNER JOIN topics ON treaties_by_topics.topic_id = topics.id WHERE topics.id = $1`, [req.params.id]
    // );
    const treatiesByTopic = await getTreatiesByTopic(req.params.id);
    res.json(treatiesByTopic);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/treaties/:id", async (req, res) => {
  try {
    // const treaty = await pool.query(
    //   `SELECT treaties.id, treaties.name, treaties.concluded, treaties.city, treaties.entered_into_force, status, english_text.text FROM treaties INNER JOIN english_text ON treaties.id = english_text.treaty_id WHERE treaties.id = $1`,
    //   [req.params.id]
    // );
    const treaty = await getTreatyByName(req.params.id);
    res.json(treaty);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/treaties/", async (req, res) => {
  try {
    const treaties = await getTreaties();
    res.json(treaties);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/topics", async (req, res) => {
  try {
    const topics = await getTopics();
    res.json(topics);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/organizations/:id", async (req, res) => {
  try {
    const treaties = await getTreatiesByOrganization(req.params.id);
    res.json(treaties);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/organizations", async (req, res) => {
  try {
    let organizations = await getOrganizations();
    res.json(organizations);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/participation/:id", async (req, res) => {
  try {
    const participationByTreaty = await getParticipationByTreaty(req.params.id);
    res.json(participationByTreaty);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/count-treaties", async (req, res) => {
  try {
    // const countTreatiesForCountry = await pool.query(
    //   `select countries.id, count(treaties) from countries inner join participation ON countries.id = participation.country_id inner join treaties ON treaties.id = participation.treaty_id group by countries.id`
    // );
    const amount = await getTreatiesAmountByCountry();
    res.json(amount);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/count-topics", async (req, res) => {
  try {
    // const countTreatiesForTopic = await pool.query(
    //   `select topics.id, count(treaties) from topics inner join treaties_by_topics ON topics.id = treaties_by_topics.topic_id inner join treaties ON treaties.id = treaties_by_topics.treaty_id group by topics.id`
    // );
    const amount = await getTreatiesAmountByTopic();
    res.json(amount);
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
  console.log(`Server has started on port ${port}`);
});
