const userService = require("../service/user.service");
const { passwordEncrypt } = require("../utils/passwordHandlers");
const { tokenGenerate } = require("../utils/tokenHandlers");

class RegisterController {
  async register(ctx, next) {
    const { name, password, avatar } = ctx.request.body;
    const passwordEncrypted = await passwordEncrypt(password);
    const result = await userService.register(name, passwordEncrypted, avatar);

    const token = tokenGenerate({ id: result.insertId, name, amount: 0 });

    ctx.body = {
      id: result.insertId,
      name,
      amount: 0,
      token,
      avatar,
    };
    await next();
  }
}

module.exports = new RegisterController();
