import db from '../database/database.connection.js';

async function create(firstName, lastName) {
  const { rows } = await db.query(
    `
    INSERT INTO passengers ("firstName", "lastName")
    VALUES ($1, $2);
    `,
    [firstName, lastName],
  );

  return rows[0];
}

async function validateById(id) {
  const { rows } = await db.query(
    `
    SELECT EXISTS (SELECT * FROM passengers WHERE id = $1);
    `,
    [id],
  );

  return rows[0].exists;
}

const passengerRepository = { create, validateById };
export default passengerRepository;
