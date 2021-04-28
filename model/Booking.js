module.exports = function(sequelize, DataTypes) {
  return sequelize.define('booking', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      user_id: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    flight_id: {
      flight_id: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    meal_id: {
      meal_id: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    luggage_id: {
      luggage_id: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    insurance_id: {
      insurance_id: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    status: {
      status: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize  
  });
};
