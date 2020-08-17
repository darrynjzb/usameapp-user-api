const BaseModel = require('./base-model');
const models = require('./index');

const sequelize = require('sequelize');

const SequelizeObj = new sequelize.Sequelize('mysql::memory:');

class User extends BaseModel {
  static getModelName() {
    return 'User';
  }

  static getTableName() {
    return 'users';
  }

  static getFields() {
    const baseFields = super.getBaseFields(sequelize);
    const fields = {
      ...baseFields,
      email: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      name: {
        type: sequelize.DataTypes.STRING(80),
        allowNull: false,
      },
      last_name: {
        type: sequelize.DataTypes.STRING(80),
        allowNull: false,
      },
      enable: {
        type: sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      is_commerce: {
        type: sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    };
    return fields;
  }
}

User.init(User.getFields(), { sequelize: SequelizeObj });
User.hasMany(models.Commerce, { foreignKey: 'user_id' });

module.exports = User;
