const express = require("express");

const ctrl = require("../../controllers/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/contact");
const wrapper = require('../../helpers/ctrlWrapper');

const router = express.Router();

router.get("/", wrapper(authenticate), ctrl.listContacts);

router.get("/:contactId", wrapper(authenticate), isValidId, ctrl.getContactById);

router.post("/", wrapper(authenticate), validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", wrapper(authenticate), isValidId, ctrl.removeContact);

router.put("/:contactId", wrapper(authenticate), isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch("/:contactId/favorite", wrapper(authenticate), isValidId, validateBody(schemas.updateFavoriteSchema), ctrl.updateStatusContact);

module.exports = router;