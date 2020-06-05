var db = require('../db');

module.exports = {
  getAll: callback => {
    db.connection.User.findAll()
      .then(users => {
        callback(null, users)
      })
      .catch(error => {
        callback(error)
      })
  },
  create: (obj, callback) => {
    db.connection.User.findAll({where: {username: obj.username}})
      .then(result => {
        if (result.length === 0) {
          return db.connection.User.create({username: obj.username})
        } else {
          callback(null, result);
        }
      })
      .then(createdUser => {
        if (!createdUser) {
          return;
        }
        callback(null, createdUser);
      })
      .catch(err => {
        callback(err);
      });
  }
};