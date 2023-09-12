import db from '../database/database.connection.js';

async function create(origin, destination, date) {
  const { rows } = await db.query(
    `
    INSERT INTO
      flights (origin, destination, date) 
    VALUES
      (
        $1, $2, $3
      )
    ;
    `,
    [origin, destination, date],
  );

  return rows[0];
}

async function validateById(id) {
  const { rows } = await db.query(
    `
    SELECT
      EXISTS 
      (
        SELECT
          * 
        FROM
          flights 
        WHERE
          id = $1
      )
    ;
    `,
    [id],
  );

  return rows[0].exists;
}

const flightRepository = { create, validateById };
export default flightRepository;
