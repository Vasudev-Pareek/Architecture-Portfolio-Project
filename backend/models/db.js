const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "architecture_db",
  password: "admin",
  port: 5432,
});

pool.connect((err, client, release) => {
  if (err) {
    console.error("Database connection failed", err.stack);
  } else {
    console.log("Database connected");
    release();
  }
});

module.exports = pool;