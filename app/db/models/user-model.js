const BaseModel = require('./base-model');

const sequelize = require('sequelize');

const SequelizeObj = new sequelize.Sequelize('mariadb::memory:');

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
      id: baseFields.id,
      email: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      password: {
        type: sequelize.DataTypes.STRING(100),
        allowNull: false,
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
      created_at: baseFields.created_at,
      updated_at: baseFields.updated_at
    };
    return fields;
  }

  static associate(models) {
    User.hasMany(models.Commerce, { foreignKey: 'user_id' });
  }
}

User.init(User.getFields(), { sequelize: SequelizeObj, modelName: User.getTableName() });

module.exports = User;
