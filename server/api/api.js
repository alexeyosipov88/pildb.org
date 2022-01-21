const express = require("express");
const router = express.Router();

const treaties = require("./routes/treaties");
const countries = require("./routes/countries");
const topics = require("./routes/topics");
const organizations = require("./routes/organizations");
const countTreaties = require("./routes/count-treaties");
const search = require("./routes/search");

treaties(router);
countries(router);
topics(router);
organizations(router);
countTreaties(router);
search(router);

module.exports = router;
