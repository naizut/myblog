'use strict';

const bcrypt = require('bcryptjs')

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(50),
    password: STRING(100),
    nickname: STRING(50),
    cellphone: STRING(11),
    mail: STRING(50),
    created_at: DATE,
    updated_at: DATE,
  });

  User.getUserByArgs = function (params, exclude) {
    return this.findOne({
      where: params,
      attributes: {
        exclude: exclude.split(',')   //除开params外的参数
      }
    })
  }

  User.queryUser = function (params) {
    return this.findOne({
      where: params,
      attributes: ['username']
    })
  }

  User.hashPassword = function (password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
  }

  User.register = function (fields) {
    fields.password = User.hashPassword(fields.password)
    return this.create(fields)
  }

  User.compareSync = function (password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword)
  }

  return User;
};