import pool from "../config/database.js";

const createUserTable = async () => {
  const queryText = `
  CREATE TABLE IF NOT EXISTS "users" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
  )`;

  try {
    await pool.query(queryText);
    console.log(`Users table created if not exists.`);
  } catch (error) {
    console.log(`Error creating Users table:`, error);
  }
};

export default createUserTable;
