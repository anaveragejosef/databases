var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // db query
    db.connection.query('SELECT * FROM users', function(error, results, fields) {
      if (error) {
        callback(error);
      } else {
        console.log('Fields: ', fields);
        console.log('Results: ', results);
        callback(null, results);
      }
    });
      // First, selector - SQL Select All
      // Second, query callback
        // Call the controller/parameter callback
  },
  create: function (obj, callback) {
    db.connection.query('INSERT INTO users (username) VALUES(?)', [obj.username], function(error, results, fields) {
      if (error) {
        callback(error);
      } else {
        console.log('Fields: ', fields);
        console.log('Results: ', results);
        callback(null, results);
      }
    });
  }
};


/* connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
});

db.query(‘SELECT * from messages’, (req, (err, result) => { if (err) res.status(404).send(err) else (res.status(200).send(result)}) */