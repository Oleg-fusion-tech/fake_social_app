const db = require("../models");
const { User } = db;

exports.getUserById = async function getUserById(req, res) {
  const id = req.headers['token'];
  try {
    if (!id) { throw new Error('Id is not provided'); }

    const user = await User.findByPk(id);
    if (!user) { throw new Error('User not found'); }

    return res.json({
      error: false,
      user,
    });
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: e.message,
    })
  }
}

exports.createUser = async function createUser(req, res) {
  const { name } = req.body;
  try {
    if (!name) { throw new Error('Name is not provided'); }

    const newUser = await User.create({
      name,
    });

    return res.status(201).json({
      error: false,
      user: newUser,
    });
  } catch (e) {
    return res.status(400).json({
      error: true,
      message: e.message,
    });
  }
}

exports.updateUserColor = async function updateUserColor(req, res) {
  const { color } = req.body;
  const { id } = req.params;
  try {
    if (!color) { throw new Error('Color is not provided'); }
    if (!id) { throw new Error('Id is not provided'); }

    const user = await User.findByPk(id);
    if (!user) { throw new Error('User not found'); }

    user.color = color;
    await user.save();

    return res.status(200).json({
      error: false,
      user,
    });

  } catch (e) {
    res.status(400).json({
      error: true,
      message: e.message,
    });
  }
}

