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

async function readAll(origin, destination, smallerDate, biggerDate) {
  const values = [];

  let query = `
    SELECT
      flights.id,
      "originCities".name AS origin,
      "destinationCities".name AS destination,
      flights.date 
    FROM
      flights 
      JOIN
        cities "originCities" 
        ON flights.origin = "originCities".id 
      JOIN
        cities "destinationCities" 
        ON flights.destination = "destinationCities".id 
    WHERE
      1=1
  `;

  if (origin) {
    values.push(origin);
    query += `
      AND "originCities".name=$${values.length}
    `;
  }

  if (destination) {
    values.push(destination);
    query += `
      AND "destinationCities".name=$${values.length}
    `;
  }

  if (smallerDate && biggerDate) {
    values.push(smallerDate);
    query += `
      AND flights.date >= $${values.length}
    `;

    values.push(biggerDate);
    query += `
      AND flights.date <= $${values.length}
    `;
  }

  query += `
    ORDER BY flights.date
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

const flightRepository = { create, readAll, validateById };
export default flightRepository;
