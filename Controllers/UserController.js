const { User } = require("../Entities/Entities");

const userRegister = async (req, res) => {
  const { username, email } = req.body;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // Example usage:
  const isValidEmail = emailRegex.test(email);
  try {
    if (isValidEmail) {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.json("User already registered");
      }
      const user = await User.create({ username, email });
      return res.json(user);
    } else {
      return res.json("Invalid email address");
    }
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  const username = req.params.name;
  const user = await User.findOne({ where: { username } });
  res.json(user);
};

module.exports = { userRegister, getUser };
