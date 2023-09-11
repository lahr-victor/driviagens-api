import db from '../database/database.connection.js';

async function create(name) {
  const { rows } = await db.query(
    `
    INSERT INTO cities (name)
    VALUES ($1);
    `,
    [name],
  );

  return rows[0];
}

async function validateExisting(name) {
  const { rows } = await db.query(
    `
    SELECT EXISTS (SELECT * FROM cities WHERE name = $1);
    `,
    [name],
  );

  return rows[0].exists;
}

const cityRepository = { create, validateExisting };
export default cityRepository;