const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const sql = require('mssql');

const config = {
    server: 'localhost', // or use '127.0.0.1'
    database: 'FoodOrderingDB', // Replace with your actual database name
    driver: 'msnodesqlv8',
    options: {
        encrypt: false, // Set to false unless using SSL
        trustServerCertificate: true, // Necessary for local development
    },
    authentication: {
        type: 'ntlm', // Ensures Windows Authentication
        options: {
            domain: 'laptop-2p63rqci\___sidrtha___' // Replace with your actual PC name
        }
    },
   
};


async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Connected to database successfully!');
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const menuRoutes = require("./routes/menuRoutes");
app.use("/api/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
