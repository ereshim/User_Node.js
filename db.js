// db.js
const { createConnection } = require("typeorm");


 createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "lenina71",
  database: "postgres",
  entities: [__dirname + "/entities/*.js"],
  synchronize: true,
}).then(() => console.log("Connected to PostgreSQL"));

