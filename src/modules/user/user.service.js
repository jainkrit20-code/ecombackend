const UserModel = require("../../models/auth.model");
const apiError = require("../../utils/apiError");

const getOwnProfileService = async (userID) => {
  const user = await UserModel.findById(userID);

  if (!user) {
    throw apiError(404, "User not found!");
  }

  return user;
};

module.exports = { getOwnProfileService };