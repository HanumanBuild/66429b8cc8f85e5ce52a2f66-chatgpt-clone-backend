'use strict';
module.exports = function(app) {
  const userHandlers = require('../controllers/userController.js');

  app.route('/auth/register')
    .post(userHandlers.register);

  app.route('/auth/sign_in')
    .post(userHandlers.sign_in);

  app.route('/profile')
    .get(userHandlers.loginRequired, userHandlers.profile);
};
