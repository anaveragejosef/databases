var models = require('../models');

module.exports = {
  get: (req, res) => {
    models.messages.getAll((err, results) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(200).json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: (req, res) => {
    models.messages.create(req.params, (err, results) => {
      if (err) {
        res.status(404).json(err);
      } else {
        res.status(201).json(results);
      }
    });
  } // a function which handles posting a message to the database
};
