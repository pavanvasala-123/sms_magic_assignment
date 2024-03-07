const { Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "mydatabase.sqlite",
  define: {
    timestamps: true,
    paranoid: true,
  },
  logging: false,
});

module.exports = sequelize;
