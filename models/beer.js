module.exports = function(sequelize, DataTypes) {
    var Beer2 = sequelize.define("Beer", {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      brewery: DataTypes.STRING,
      description: DataTypes.TEXT,
      picture_URL: DataTypes.STRING
     
    });
    return Beer2;
  };
  