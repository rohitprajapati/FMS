module.exports = function(sequelize, DataTypes) {
  return sequelize.define('insurance', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    company: {
      company: DataTypes.STRING,
      allowNull: false,
    },
    premium: {
      premium: DataTypes.INTEGER,
      allowNull: false,
    },
    cover: {
      cover: DataTypes.INTEGER,
      allowNull: false,
    },
    fromDate: {
      company: DataTypes.DATE,
      allowNull: false,
    },
    toDate: {
      toDate: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize  
  });
};
