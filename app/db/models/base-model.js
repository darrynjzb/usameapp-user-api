const sequelize = require('sequelize');

class BaseModel extends sequelize.Model {
  static getBaseFields() {
    return {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.DataTypes.INTEGER,
      },
      created_at: {
        type: sequelize.DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: sequelize.DataTypes.DATE,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    };
  }
}

module.exports = BaseModel;
