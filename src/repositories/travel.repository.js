import db from '../database/database.connection.js';

async function create(passengerId, flightId) {
  const { rows } = await db.query(
    `
    INSERT INTO travels ("passengerId", "flightId")
    VALUES ($1, $2);
    `,
    [passengerId, flightId],
  );

  return rows[0];
}

const travelRepository = { create };
export default travelRepository;
