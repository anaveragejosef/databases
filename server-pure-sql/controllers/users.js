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
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(results);
      }
    });
  }
};

 // Testing
 /* curl --header "Content-Type: application/json" \
 --request POST \
 --data '{"username":"Valjean","roomname":"main", "text":"hello world"}' \
 http://localhost:3000/classes/messages */