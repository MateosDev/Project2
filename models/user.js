module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      first_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      astrology_sign: DataTypes.STRING,
      birth_month: DataTypes.STRING,
      user_bio: DataTypes.STRING,
      user_city: DataTypes.STRING,
    });
    return User;
  };
  