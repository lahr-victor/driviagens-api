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

const passengerRepository = { create };
export default passengerRepository;