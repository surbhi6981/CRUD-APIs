const { user: User } = require('../models');  // Adjust the path

const deleteUser = async (userId) => {
  // 1. Find the user
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    const err = new Error("User doesn't exist");
    err.statusCode = 400;
    throw err;
  }

  // 2. Delete the user
  await user.destroy();

  console.log('Deleted user:', user); // Optional logging
  return user; // Return deleted user for confirmation
};

module.exports = { deleteUser };