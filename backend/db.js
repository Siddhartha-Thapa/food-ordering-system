const sql = require('mssql');

const config = {
  server: 'LAPTOP-2P63RQCI',  // For default instance, use localhost
  database: process.env.DB_NAME,  // Your database name from .env
  options: {
    encrypt: true,  // Enable encryption if needed
    trustServerCertificate: true,  // Accept self-signed certificates if necessary
  },
  authentication: {
    type: 'default',  // Windows Authentication
  },
};

sql.connect(config).then(() => {
  console.log('Connected successfully!');
}).catch((err) => {
  console.error('Error connecting to database:', err);
});
