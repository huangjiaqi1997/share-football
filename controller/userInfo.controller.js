const userService = require("../service/user.service");

class UserInfoController {
  async userInfo(ctx, next) {
    const { name } = ctx.userInfo;
    const [userInfo] = await userService.getUserInfoByName(name);
    ctx.body = userInfo;

    await next();
  }
}

module.exports = new UserInfoController();
