import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;
const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
};

if (process.env.MODE === 'prod') databaseConfig.ssl = true;

const db = new Pool(databaseConfig);
export default db;
