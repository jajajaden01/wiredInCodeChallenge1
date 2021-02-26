const userTable = {
  createTable: `CREATE TABLE IF NOT EXISTS 
      users(
        id SERIAL PRIMARY KEY NOT NULL,
        firstName VARCHAR(200) NOT NULL,
        lastName VARCHAR(200) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        userType VARCHAR(100) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(128) NOT NULL,
        status VARCHAR(50) NOT NULL,
        createdDate VARCHAR(100) NOT NULL,
        updatedDate VARCHAR(100)
        )`,
  insertUser: 'INSERT INTO users( firstName, lastName, email, userType, phone, username, password, status, createdDate, updatedDate) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
  isUserExist: 'SELECT * FROM users WHERE email = $1',
};

const messageTable = {
  createTable: `CREATE TABLE IF NOT EXISTS 
      message(
        id SERIAL PRIMARY KEY NOT NULL,
        messageFrom VARCHAR(100) UNIQUE NOT NULL,
        messageTo VARCHAR(100) UNIQUE NOT NULL,
        messageSubject VARCHAR(300) NOT NULL,
        messageBody VARCHAR(500) NOT NULL,
        status INT NOT NULL,
        createdDate VARCHAR(100) NOT NULL,
        updatedDate VARCHAR(100)
        )`,
  insertMessage: 'INSERT INTO message( messageFrom, messageTo, messageSubject, messageBody, status, createdDate, updatedDate) VALUES($1 ,$2, $3, $4, $5, $6, $7) RETURNING *',
  messageExist: 'SELECT * FROM message WHERE messageSubject = $1 AND messageBody = $2',
  allMessages: 'SELECT * FROM message ORDER BY id DESC LIMIT 50',
  allUserMessages: 'SELECT * FROM message WHERE messageFrom = $1 ORDER BY id DESC LIMIT 50',
  oneMessage: 'SELECT * FROM message WHERE messageFrom = $1 AND id = $2',
  anMessage: 'SELECT * FROM message WHERE id = $1',
  updateStatus: 'UPDATE message SET status = $1 WHERE messageFrom = $2 AND id = $3 RETURNING *',
  deleteMessage: 'DELETE FROM  message WHERE messageFrom = $1 AND id = $2 RETURNING *',
};

export default { userTable, messageTable };
