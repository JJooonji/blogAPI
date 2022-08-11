const express = require('express');
const Users = require('../controller/users');
const authLoginUserMiddleware = require('../middlewares/authLoginUserMiddleware');
const UsersController = new Users();

const router = express.Router();

router
  .route('/')
  .get(UsersController.createAccountPage)
  .post(UsersController.createAccount);
router
  .route('/login')
  .get(authLoginUserMiddleware, UsersController.loginPage)
  .post(authLoginUserMiddleware, UsersController.login);

module.exports = router;
