const UsersService = require('../services/users.service');
require('dotenv').config();
const jwt = require('jsonwebtoken');

class UsersController {
  usersService = new UsersService();

  createAccountPage = (req, res, next) => {
    return res.send('This is Create Account Page');
  };
  createAccount = async (req, res, next) => {
    const { nickname, password, confirmPassword } = req.body;
    if (!nickname || !password) {
      return res.status(500).send({ msg: 'bad request' });
    }
    if (password !== confirmPassword) {
      return res.status(500).send({ msg: '비밀번호 오류' });
    }
    const createUsersData = await this.usersService.createUser(
      nickname,
      password
    );
    if (!createUsersData) {
      return res.status(500).json({ data: '중복되었습니다.' });
    }
    res.status(201).json({ data: createUsersData });
  };
  loginPage = (req, res, next) => {
    return res.send('Login page 입니다.');
  };
  login = async (req, res, next) => {
    try {
      const { nickname, password } = req.body;
      if (!nickname) {
        return res.status(412).send({
          errorMessage: '닉네임 또는 패스워드를 확인해주세요.',
        });
      }
      const user = await this.usersService.findUserByNickname(
        nickname,
        password
      );
      const expires = new Date();
      expires.setMinutes(expires.getMinutes() + 60);

      const token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY);
      res.cookie(process.env.COOKIE_NAME, `Bearer ${token}`, {
        expires: expires,
      });
      return res.status(200).json({ token });
    } catch {
      if (!user) {
        return res.status(412).send({
          errorMessage: '닉네임 또는 패스워드를 확인해주세요.',
        });
      }
    }
  };
}

module.exports = UsersController;
