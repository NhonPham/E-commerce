const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/products")
  .post(productController.createProduct);

router
  .route("/products/:id")
  .delete(productController.deleteProduct);

module.exports = router;