const orderService = require("../service/order.service");
const userService = require("../service/user.service");

class OrderController {
  async create(ctx, next) {
    console.log(ctx.orderInfo, ctx.userInfo);
    const { status, orderNo, stadiumId } = ctx.orderInfo;
    const { id: userId } = ctx.userInfo;
    const result = await orderService.create(
      status,
      orderNo,
      userId,
      stadiumId,
      status ? 15 : 0
    );
    if (result.insertId) {
      if (status) {
        ctx.body = orderNo;
      } else {
        ctx.body = "create order failed";
      }
    }

    await next();
  }

  async finish(ctx, next) {
    const { orderNo } = ctx.orderInfo;
    const { name, id } = ctx.userInfo;
    const result = await orderService.finish(orderNo);
    console.log(result);

    if (result.affectedRows) {
      const [userInfo] = await userService.getUserInfoByName(name);
      await userService.updateUserAmount(+userInfo.amount - 15 * 100, id);
    }
    ctx.body = "order finish";
    await next();
  }

  async list(ctx, next) {
    const { id } = ctx.userInfo;
    const result = await orderService.list(id);
    console.log(result);
    ctx.body = result;

    await next();
  }
}

module.exports = new OrderController();
