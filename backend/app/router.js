'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.get('/', controller.home.index);

  // router.resources('users', '/users', controller.users);
  router.post('/users/login', controller.users.login)
  router.get('/articles/detail/:id', controller.articles.detail)
  router.get('/articles/list', controller.articles.index)
  router.post('/articles/create', controller.articles.create)
  router.post('/articles/update', controller.articles.update)
  router.post('/articles/delete', controller.articles.destroy)
};
