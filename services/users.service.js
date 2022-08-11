const UsersRepository = require('../repositories/users.repository');

class UsersService {
  usersRepository = new UsersRepository();

  createUser = async (nickname, password) => {
    const checkUser = await this.usersRepository.checkDuplicatedId(nickname);
    if (checkUser.length) {
      return false;
    }

    const createPostData = await this.usersRepository.createUser(
      nickname,
      password
    );
    return {
      userId: createPostData.null,
      nickname: createPostData.nickname,
      password: createPostData.password,
    };
  };
  findUserByNickname = async (nickname, password) => {
    const findUser = await this.usersRepository.findUserByNickname(
      nickname,
      password
    );

    return {
      userId: findUser.userId,
      nickname: findUser.nickname,
    };
  };
}
module.exports = UsersService;
