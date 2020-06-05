var db = require('../db');

module.exports = {
  getAll: callback => {
    db.connection.Message.findAll()
      .then(messages => {
        callback(null, messages)
      })
      .catch(error => {
        callback(error)
      })
  }, // a function which produces all the messages
  create: (obj, callback) => {
    db.connection.User.findAll({where: {username: obj.username}})
      .then(result => {
        return db.connection.Message.create({
          userid: result[0].id,
          text: obj.text,
          roomname: obj.roomname
        });
      })
      .then(results => {
        callback(null, results);
      })
      .catch(err => {
        callback(err)
      });
  }
};
