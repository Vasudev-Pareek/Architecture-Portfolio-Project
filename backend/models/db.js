const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
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
