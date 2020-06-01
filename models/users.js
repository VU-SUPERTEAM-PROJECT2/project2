module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_nickname: DataTypes.STRING,
    user_password: DataTypes.STRING
  });
  return Users;
};
