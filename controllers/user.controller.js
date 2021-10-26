const User = require("../models/user.model");
//MODULE POUR VERIFIER SI L'ID EXISTE
const ObjectID = require("mongoose").Types.ObjectId;

//POUR AJOUT
module.exports.addUser = async (req, res) => {
  const { pseudo, email, password } = req.body;

  const user = await User.create({ pseudo, email, password });
  res.status(201).json({ user: user._id });
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).send({ message: `INVALID ${req.params.id}` });

  await User.remove({ _id: req.params.id }).exec();
  res.status(200).send({ message: "Supprimer avec succés!" });
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    console.log(`INVALID ID : ${req.params.id}`);
  try {
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: req.body.password,
        },
      },
      { new: true },
      (err, data) => {
        if (!err) res.status(200).json(data);
        else res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    console.log(err);
  }
};
