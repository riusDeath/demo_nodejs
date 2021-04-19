const { verifySignUp } = require("../middlewares/index");
const controller = require("../controllers/AuthController");
const { readFile, logAction } = require("../controllers/LogController");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/log", readFile);

  app.post("/api/v1/log", logAction);
};