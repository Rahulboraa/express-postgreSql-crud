import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
});

pool.on("connect", () => {
  console.log(`Connection Pool Established With Database`);
});

export default pool;
