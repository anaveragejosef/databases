var db = require('../db');

module.exports = {
  getAll: callback => {
    // console.log('----- DB CONNECTION ------', db.connection);
    db.connection.query('SELECT * FROM messages', (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        // console.log('Fields: ', fields);
        // console.log('Results: ', results);
        callback(null, results);
      }
    });
  }, // a function which produces all the messages
  create: (obj, callback) => {
    console.log('create obj ---------- ', obj);
    db.connection.query('SELECT * FROM users WHERE username = ?', [obj.username], (error, results, fields) => {
      if (error) {
        callback(error);
      } else {
        // console.log('RESULTS OUTPUT --------', results[0].id);
        // console.log('QUERY INPUTS ----------')
        // console.log(obj.text)
        // console.log(obj.roomname)
        // console.log(results[0].id)
        db.connection.query('INSERT INTO messages (text, roomname, user_id) VALUES(?, ?, ?)', [obj.text, obj.roomname, results[0].id], (error, results, fields) => {
          if (error) {
            // console.log('Message error ----- ', error);
            callback(error);
          } else {
            // console.log('Results: ', results);
            callback(null, results);
          }
        });
      }
    });
  } // a function which can be used to insert a message into the database
};
