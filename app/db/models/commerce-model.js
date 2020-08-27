const BaseModel = require('./base-model');

const sequelize = require('sequelize');

const SequelizeObj = new sequelize.Sequelize('mariadb::memory:');

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
      ...baseFields,
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
        type: sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    };
    return fields;
  }

  static associate(models) {
    Commerce.belongsTo(models.User, { foreignKey: 'user_id' });
  }
}

Commerce.init(Commerce.getFields(), { sequelize: SequelizeObj, modelName: 'Commerce' });

module.exports = Commerce;
