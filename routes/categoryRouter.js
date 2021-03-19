const router = require("express").Router();
const categoryController = require("../controllers/categoryController");
const auth = require("../middleWare/auth");
const authAdmin = require("../middleWare/authAdmin");

router
  .route("/category")
  .get(categoryController.getCategories)
  .post(auth, authAdmin, categoryController.createCategory);

module.exports = router;