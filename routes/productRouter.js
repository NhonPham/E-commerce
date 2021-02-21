const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/products")
  .post(productController.createProduct);


module.exports = router;