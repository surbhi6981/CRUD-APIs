// controllers/userController.js
const { user:User } = require('../models'); // adjust path to your Sequelize models

const createUser = async (userInfo) => {
    // 2. ADD EARLY VALIDATION for email
  if (!userInfo?.email || typeof userInfo.email !== 'string' || !userInfo.email.trim()) {
    const err = new Error('Email is required');
    err.statusCode = 400;
    throw err;
  }
  try {
    // Check if an account with this e‑mail already exists
    const emailExists = await User.findOne({ where: { email: userInfo.email } });
    if (emailExists) {
      // Throw a normal Error; you can add a statusCode if you like
      const err = new Error('Email has already been registered');
      err.statusCode = 400;      
      throw err;
    }

    // Create and return the new user
    const newUser = await User.create(userInfo);
    return newUser;
  } catch (error) {
    // Propagate the error so route middleware / global error handler can pick it up
    throw error;
  }
};

module.exports = { createUser };

