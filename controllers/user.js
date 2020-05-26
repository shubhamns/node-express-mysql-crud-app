const User = require("../models/user");

exports.createUser = async (req, res) => {
  if (!req.body.firstName || !req.body.lastName || !req.body.email) {
    return res.status(422).json({
      firstName: "firstname is required",
      lastName: "firstname is required",
      email: "email is required",
    });
  }
  const user = new User(req.body);
  User.create(user, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.readUser = async (req, res) => {
  User.read(function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.updateUser = async (req, res) => {
  const id = req.params.userId;
  User.update(id, new User(req.body), function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};

exports.deleteUser = async (req, res) => {
  const id = req.params.userId;
  User.delete(id, function (err, user) {
    if (err) {
      return res.status(403).send(err);
    }
    res.json(user);
  });
};
