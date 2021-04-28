module.exports = function(sequelize, DataTypes) {
  return sequelize.define('luggage', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    maxWeight: {
      maxWeight: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      maxWeight: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize  
  });
};
