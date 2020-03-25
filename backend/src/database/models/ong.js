"use strict";
module.exports = (sequelize, DataTypes) => {
  const ong = sequelize.define(
    "ong",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      uf: {
        type: DataTypes.STRING(2),
        allowNull: false
      }
    },
    { paranoid: true }
  );
  ong.associate = function(models) {
    ong.hasMany(models.incidents, {
      foreignKey: "ong_id"
    });
  };
  return ong;
};
