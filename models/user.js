module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      userid: DataTypes.STRING,
      // email: DataTypes.STRING,
      // age: DataTypes.STRING,
      user_favorite: DataTypes.TEXT,
      picture_URL: DataTypes.STRING
    });
    return User;
  };
  