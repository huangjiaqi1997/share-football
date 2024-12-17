const Router = require("@koa/router");
const userInfoController = require("../controller/userInfo.controller");
const { verifyAuth } = require("../middleware/auth.middleware");

const router = new Router({ prefix: "/userInfo" });

router.get("/", verifyAuth, userInfoController.userInfo);

module.exports = router;
