const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');

const pool = require("./db")
// middleware

app.use(cors());
app.use(express.json()); // req.bodu
app.use(morgan('tiny'));


app.get("/countries/:id", async (req, res) => {
  try {
    const treatiesByCountry = await pool.query(`SELECT * FROM countries INNER JOIN participation ON countries.id = participation.country_id INNER JOIN treaties ON participation.treaty_id = treaties.id WHERE countries.id = ${req.params.id}`);
    
    res.json(treatiesByCountry.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/countries", async (req, res) => {
  try {
    const countriesAll = await pool.query("select * from countries");
    res.json(countriesAll.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/topics/:id", async (req, res) => {
  try {
    const treatiesByTopic = await pool.query(`SELECT * FROM treaties INNER JOIN treaties_by_topics ON treaties.id = treaties_by_topics.treaty_id INNER JOIN topics ON treaties_by_topics.topic_id = topics.id WHERE topics.id = ${req.params.id}`);
    res.json(treatiesByTopic.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/treaties/", async (req, res) => {
  try {
    const treatiesAll = await pool.query(`SELECT * FROM treaties`);
    res.json(treatiesAll.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/topics", async (req, res) => {
  try {
    const topicsAll = await pool.query("SELECT * FROM topics");
    res.json(topicsAll.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/participation/:id", async (req, res) => {
  try {
    const participationByTreaty = await pool.query(`SELECT * FROM participation INNER JOIN treaties ON participation.treaty_id = treaties.id INNER JOIN countries ON participation.country_id = countries.id WHERE treaties.id = ${req.params.id}`);
    res.json(participationByTreaty.rows)
  } catch (err) {
    console.error(err.message)
  }
})

app.get("/participation", async (req, res) => {
  try {
    const participationAll = await pool.query("SELECT * FROM participation");
    res.json(participationAll.rows)
  } catch (err) {
    console.error(err.message)
  }
})



 app.listen(4000, () => {
   console.log("Server has started on port 4000")
 }); 