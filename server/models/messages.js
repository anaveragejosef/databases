var db = require('../db');

module.exports = {
  getAll: callback => {
    db.connection.query('SELECT * FROM messages', (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: (obj, callback) => {
    db.connection.query('SELECT * FROM users WHERE username = ?', [obj.username], (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        db.connection.query('INSERT INTO messages (text, roomname, user_id) VALUES(?, ?, ?)', [obj.text, obj.roomname, results[0].id], (error, results, fields) => {
          if (error) {
            callback(error);
          } else {
            callback(null, results);
          }
        });
      }
    });
  } // a function which can be used to insert a message into the database
};
