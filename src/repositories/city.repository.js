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

async function validateById(id) {
  const { rows } = await db.query(
    `
    SELECT EXISTS (SELECT * FROM cities WHERE id = $1);
    `,
    [id],
  );

  return rows[0].exists;
}

async function validateByName(name) {
  const { rows } = await db.query(
    `
    SELECT EXISTS (SELECT * FROM cities WHERE name = $1);
    `,
    [name],
  );

  return rows[0].exists;
}

const cityRepository = { create, validateById, validateByName };
export default cityRepository;
