var db = require('../db');

module.exports = {
  getAll: callback => {
    // db query
    db.connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  },
  create: (obj, callback) => {
    db.connection.query('INSERT INTO users (username) VALUES(?)', [obj.username], (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        callback(null, results);
      }
    });
  }
};