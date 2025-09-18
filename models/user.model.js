const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("user",
    {
      firstName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      lastName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      Age: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },

      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      role: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "user",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};
