'use strict';

const bcrypt = require('bcryptjs')

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Article = app.model.define('articles', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(100),
    content: TEXT,
    type: STRING(50),
    tag: STRING(50),
    created_on: STRING(50),
    modified_on: STRING(50),
  },{
    timestamps: false,
    freezeTableName: true,
    tableName: 'articles',
    createdAt: 'created_on',  //sequelize默认生成时间对应为On
    updatedAt: 'modiefied_on'
  });

  Article.getArticleByArgs = function (params, exclude) {
    return this.findOne({
      where: params,
      attributes: {
        exclude: exclude.split(',')   //除开params外的参数
      }
    })
  }

  Article.queryArticle = function (params) {
    return this.findOne({
      where: params,
      attributes: ['title']
    })
  }

  return Article;
};