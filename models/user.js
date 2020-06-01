module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      age: DataTypes.STRING,
      favoriteBeer: DataTypes.TEXT,
      picture_URL: DataTypes.STRING
    });
    return User;
  };
  