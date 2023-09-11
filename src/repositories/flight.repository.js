import db from '../database/database.connection.js';

async function create(origin, destination, date) {
  const { rows } = await db.query(
    `
    INSERT INTO flights (origin, destination, date)
    VALUES ($1, $2, $3);
    `,
    [origin, destination, date],
  );

  return rows[0];
}

const flightRepository = { create };
export default flightRepository;