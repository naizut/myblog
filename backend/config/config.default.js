/* eslint valid-jsdoc: "off" */

'use strict';

const { mysql } = require("./plugin");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599735470888_9632';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.jwt = {
    secret: "123456"
  }

  config.security = {
    csrf : {
      headerName: 'x-csrf-token',// 自定义请求头
    }
  }
  
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'myblog',
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: true,
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
