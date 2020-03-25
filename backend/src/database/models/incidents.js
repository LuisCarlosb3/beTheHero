"use strict";
module.exports = (sequelize, DataTypes) => {
  const incidents = sequelize.define(
    "incidents",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      value: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      ong_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { paranoid: true }
  );
  incidents.associate = function(models) {
    incidents.belongsTo(models.ong, {
      foreignKey: "ong_id"
    });
  };
  return incidents;
};
