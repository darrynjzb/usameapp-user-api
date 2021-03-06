/* eslint-disable max-len */
const BaseModel = require('./base-model');
const { config } = require('../../config');

const sequelize = require('sequelize');

class Commerce extends BaseModel {
  static getModelName() {
    return 'Commerce';
  }

  static getTableName() {
    return 'commerces';
  }

  static getFields() {
    const baseFields = super.getBaseFields(sequelize);
    const fields = {
      id: baseFields.id,
      display_name: {
        type: sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      address: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false,
      },
      web_page: {
        type: sequelize.DataTypes.STRING(80),
        allowNull: false,
      },
      max_person_on_site: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
            schema: config.mariadb.database
          },
          key: 'id'
        }
      },
      created_at: baseFields.created_at,
      updated_at: baseFields.updated_at
    };
    return fields;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

module.exports = Commerce;
