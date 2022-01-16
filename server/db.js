const Pool = require("pg").Pool;

const pool = new Pool({
  user: "alexey",
  password: "lawyer",
  host: "localhost",
  port: 5432,
  database: "pildb"
})

module.exports = pool;