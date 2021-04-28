module.exports = function(sequelize, DataTypes) {
  return sequelize.define('meal', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize  
  });
};
