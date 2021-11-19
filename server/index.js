const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")
// middleware

app.use(cors());
app.use(express.json()); // req.bodu

app.get("/countries", async (req, res) => {
  try {
    const countries = await pool.query("select * from countries");
    res.json(countries)
  } catch (err) {
    console.error(err.message)
  }

})

 app.listen(4000, () => {
   console.log("Server has started on port 4000")
 }); 