module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define("Search", {

    search_word: DataTypes.STRING,
  });
  return Search;
};
