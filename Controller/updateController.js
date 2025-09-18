const { user: User } = require('../models');  // Adjust path as needed

const updateUser = async (userId, userDetails) => {
  // 1. Check if user exists
  const user = await User.findOne({ where: { id: userId } });

  if (!user) {
    const err = new Error("User doesn't exist");
    err.statusCode = 400;
    throw err;
  }

  // 2. Update user details
  await User.update(userDetails, { where: { id: userId } });

  // 3. Fetch and return updated user
  const updatedUser = await User.findOne({
    where: { id: userId },
    attributes: { exclude: ['password'] }, // Optional: remove password in response
  });

  console.log('Updated user:', updatedUser);
  return updatedUser;
};

module.exports = { updateUser };