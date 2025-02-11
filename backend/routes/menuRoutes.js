const express = require("express");
const router = express.Router();
const { sql, poolPromise } = require("../db");

// Fetch all menu items
router.get("/", async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query("SELECT * FROM MenuItems");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
