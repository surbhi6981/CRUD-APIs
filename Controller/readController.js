// controllers/userController.js
const { user: User } = require('../models');   // adjust path

const FetchUser = async (firstName) => {
  let userDets;

  if (firstName) {
    // Fetch user(s) by firstName
    userDets = await User.findAll({
      where: { firstName },
      attributes: { exclude: ['password'] },
    });

    if (userDets.length === 0) {
      const err = new Error('User not found');
      err.statusCode = 404;
      throw err;
    }
  } else {
    // Fetch all users
    userDets = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    if (userDets.length === 0) {
      const err = new Error('No users found');
      err.statusCode = 404;
      throw err;
    }
  }

  return userDets;
};

module.exports = { FetchUser };
