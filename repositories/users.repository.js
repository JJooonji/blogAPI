const { Users } = require('../models');
const { Op } = require('sequelize');
class UsersRepository {
  createUser = async (nickname, password) => {
    const createUserData = await Users.create({
      nickname,
      password,
    });
    return createUserData;
  };
  findUserByNickname = async (nickname, password) => {
    const findUserByNicknameData = await Users.findOne({
      where: {
        [Op.and]: [{ nickname }, { password }],
      },
    });
    return findUserByNicknameData;
  };
  checkDuplicatedId = async (nickname) => {
    const checkDuplicatedIdData = await Users.findAll({
      attributes: ['userId'],
      where: { nickname },
    });

    return checkDuplicatedIdData;
  };
}

module.exports = UsersRepository;
