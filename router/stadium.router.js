const Router = require("@koa/router");
const staidumController = require("../controller/staidum.controller");

const router = new Router({ prefix: "/stadium" });

router.get("/list", staidumController.list);

module.exports = router;
