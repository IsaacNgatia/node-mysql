const mysql = require("mysql");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
  port: 3307,
});

pool.query(
  "INSERT INTO `example1` ( `name`, `email`) VALUES ('mike', 'mike@test.xyz');",
  (error, result, fields) => {
    if (error) {
      return console.log(error);
    } else if (result) {
      return console.log(result);
    }
  }
);
pool.query("select * from example1", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
