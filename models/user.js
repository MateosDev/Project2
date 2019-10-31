module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      first_name: DataTypes.STRING,
      age: DataTypes.INTEGER,
      astrology_sign: DataTypes.STRING,
      quiz_answers: DataTypes.STRING,
    });
    return User;
  };
  