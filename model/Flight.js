module.exports = function(sequelize, DataTypes) {
  return sequelize.define('flight', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    flightNumber: {
      flightNumber: DataTypes.STRING,
      allowNull: false,
    },
    originAirport: {
      originAirport: DataTypes.STRING,
      allowNull: false,
    },
    destinationAirport: {
      destinationAirport: DataTypes.STRING,
      allowNull: false,
    },
    scheduledDepartureDate: {
      scheduledDepartureDate: DataTypes.DATE,
      allowNull: false,
    },
    scheduledArrivalDate: {
      scheduledArrivalDate: DataTypes.DATE,
      allowNull: false,
    },
    actualDepartureDate: {
      actualDepartureDate: DataTypes.DATE,
      allowNull: false,
    },
    actualArrivalDate: {
      actualArrivalDate: DataTypes.DATE,
      allowNull: false,
    },
    airline: {
      airline: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize  
  });
};
