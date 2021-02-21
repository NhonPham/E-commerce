const Products = require("../models/productModel");


const productController = {
    createProduct: async (req, res) => {
        try {
          const {
            product_id,
            title,
            price,
            description,
            content,
            images,
            category,
          } = req.body;
          if (!images) return res.status(400).json({ msg: "No image Upload." });
    
          const product = await Products.findOne({ product_id });
          if (product)
            return res.status(400).json({ msg: " This product already exist." });
    
          const newProduct = new Products({
            product_id,
            title: title.toLowerCase(),
            price,
            description,
            content,
            images,
            category,
          });
    
          await newProduct.save();
          res.json({ msg: "Create a new product." });
        } catch (err) {
          return res.status(500).json({ msg: err.message });
        }
      },
}


module.exports = productController;