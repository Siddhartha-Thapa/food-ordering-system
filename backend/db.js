const sql = require("mssql");
require("dotenv").config();

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
  authentication: {
    type: "default"
  }
};

const poolPromise = new sql.ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log("Connected to MSSQL using Windows Authentication");
    return pool;
  })
  .catch(err => console.error("Database Connection Failed:", err));

module.exports = {
  sql, poolPromise
};
