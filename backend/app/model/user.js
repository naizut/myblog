'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(50),
    password: STRING(32),
    nickname: STRING(50),
    cellphone: STRING(11),
    mail: STRING(50),
    created_at: DATE,
    updated_at: DATE,
  });

  return User;
};