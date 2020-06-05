var mysql = require('mysql2');
var Sequelize = require('sequelize');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports = {
//   connection:
// }
var db = new Sequelize('chat', 'root', 'SQL47!aqs.$$.', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.connection = {
  User: db.define('Users', {
    username: Sequelize.STRING
  }, {
    timestamps: false
  }),
  Message: db.define('Messages', {
    text: Sequelize.STRING,
    roomname: Sequelize.STRING,
    userid: Sequelize.INTEGER
  }, {
    timestamps: false
  })
}

module.exports.connection.User.sync();
module.exports.connection.Message.sync();
