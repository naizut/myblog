'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    // 在执行数据库升级时调用的函数，创建 users 表
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(50),
      password: STRING(32),
      nickname: STRING(50),
      cellphone: STRING(11),
      mail: STRING(50),
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    // 在执行数据库降级时调用的函数，删除 users 表
    await queryInterface.dropTable('users');
  }
};
