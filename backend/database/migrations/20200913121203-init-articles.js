  'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING, TEXT } = Sequelize;
    await queryInterface.createTable('articles', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true},
      title: STRING(100),
      content: TEXT,
      type: STRING(50),
      tag: STRING(50),
      created_on: DATE,
      modified_on: DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('articles');
  }
};
