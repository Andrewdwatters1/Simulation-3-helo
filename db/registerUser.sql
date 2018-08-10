INSERT INTO userz (username, password)
VALUES ($1, $2)
RETURNING *;