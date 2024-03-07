const { DataTypes } = require("sequelize");
const sequelize = require("../DataBaseConnection/connection");

// Models
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Company = sequelize.define("Company", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Client = sequelize.define("Client", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
    },
  },
});

const ClientUser = sequelize.define("ClientUser", {
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

module.exports = { User, Client, Company, ClientUser };

// Associations
Client.belongsTo(User);
Client.belongsTo(Company);
ClientUser.belongsTo(Client);
ClientUser.belongsTo(User);
User.belongsToMany(Client, { through: ClientUser });
Client.belongsToMany(User, { through: ClientUser });
Company.hasMany(User, { as: "users" });
