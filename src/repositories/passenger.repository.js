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

async function readTravels(name) {
  const values = [];

  let query = `
    SELECT
      CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger,
      COUNT(*)::INT AS travels 
    FROM
      passengers 
      JOIN
        travels 
        ON travels."passengerId" = passengers.id
    WHERE 
      1=1
  `;

  if (name) {
    values.push(`%${name}%`);
    query += `
      AND CONCAT(passengers."firstName", ' ', passengers."lastName") ILIKE $1
    `;
  }

  query += `
    GROUP BY
      passengers.id 
      ORDER BY
        travels DESC
    ;
  `;

  const { rows } = await db.query(
    query,
    values,
  );

  return rows;
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
          passengers 
        WHERE
          id = $1
      )
    ;
    `,
    [id],
  );

  return rows[0].exists;
}

const passengerRepository = { create, readTravels, validateById };
export default passengerRepository;
