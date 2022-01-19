require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const api = require('./api/api');
const PORT = process.env.PORT || 4000;



// const { rows } = require("pg/lib/defaults");
// middleware
app.use(cors());
app.use(express.json()); // req.bodu
app.use(morgan("tiny"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', api);


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
