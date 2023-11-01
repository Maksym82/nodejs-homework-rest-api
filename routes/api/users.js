const express = require("express");

const ctrl = require("../../controllers/users");
const { schemas } = require("../../models/user");
const { validateBody, authenticate } = require("../../middlewares");
const wrapper = require('../../helpers/ctrlWrapper');

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.registerUser);

router.post("/login", validateBody(schemas.loginSchema), ctrl.loginUser);

router.post("/logout", wrapper(authenticate), ctrl.logoutUser);

router.get("/current", wrapper(authenticate), ctrl.getCurrentUser);

router.patch("/", wrapper(authenticate), validateBody(schemas.updateStatusSchema), ctrl.updateStatusUser);

module.exports = router;