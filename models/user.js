module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Order, { foreignKey: 'userId' });
    User.hasMany(models.Product, { foreignKey: 'userId' });
  };
  return User;
};
