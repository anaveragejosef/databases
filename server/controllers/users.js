var models = require('../models');

module.exports = {
  get: (req, res) => {
    // call users model
      // with callback send response and status code based on err
      models.users.getAll((err, results) => {
        if (err) {
          res.status(404).send(err);
        } else {
          res.status(200).json(results);
        }
      });
  },
  post: (req, res) => {
    // console.log('REQ ---', req);
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(results);
      }
    });
  }
};

// db.query(‘SELECT * from messages’, (req, (err, result) => { if (err) res.status(404).send(err) else (res.status(200).send(result)}) */


 //[{id: 1, username: josef}, ...] results[x].username