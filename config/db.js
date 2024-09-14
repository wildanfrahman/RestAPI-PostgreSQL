//set db
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "crud",
  password: "1234",
  port: "5432",
});

pool.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("koneksi berhasil");
});

module.exports = pool;
