const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const staticServer = require("koa-static");
const logger = require("koa-logger");

const errorHandler = require("./error");

const stadiumRouter = require("./router/stadium.router");
const registerRouter = require("./router/register.router");
const loginRouter = require("./router/login.router");
const rechargeRouter = require("./router/recharge.router");
const cdkeyRouter = require("./router/cdkey.router");
const orderRouter = require("./router/order.router");
const questionRouter = require("./router/question.router");
const uploadRouter = require("./router/upload.router");
const fileRouter = require("./router/file.router");
const userInfoRouter = require("./router/userInfo.router");
const { wrapperMiddleware } = require("./middleware/wrapper.middleware");

const app = new Koa();

app.use(bodyParser());
app.use(staticServer("static"));
app.use(logger());

app.use(stadiumRouter.routes());
app.use(stadiumRouter.allowedMethods());
app.use(registerRouter.routes());
app.use(registerRouter.allowedMethods());
app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());
app.use(rechargeRouter.routes());
app.use(rechargeRouter.allowedMethods());
app.use(cdkeyRouter.routes());
app.use(cdkeyRouter.allowedMethods());
app.use(orderRouter.routes());
app.use(orderRouter.allowedMethods());
app.use(questionRouter.routes());
app.use(questionRouter.allowedMethods());
app.use(uploadRouter.routes());
app.use(uploadRouter.allowedMethods());
app.use(fileRouter.routes());
app.use(fileRouter.allowedMethods());
app.use(userInfoRouter.routes());
app.use(userInfoRouter.allowedMethods());

app.use(wrapperMiddleware);

app.on("error", errorHandler);

module.exports = app;
