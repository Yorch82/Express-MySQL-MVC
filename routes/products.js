const express = require('express');
const ProductsController = require('../controllers/ProductsController');
const router = express.Router();


router.post("/addProduct", ProductsController.create);
router.get("/createdb", ProductsController.createDb);
router.get("/createtable/products", ProductsController.createTable);
router.put("/updateProduct/:id", ProductsController.updateProduct);
router.get("/showProducts", ProductsController.showProducts);
router.get("/showProducts/id/:id", ProductsController.showProductsById);
router.get("/showOrderedProducts/", ProductsController.showOrderedProducts);
router.get("/showProducts/name/:name", ProductsController.showProductByName);
router.delete("/deleteProducts/id/:id", ProductsController.deleteProductById);
router.get('/showProductCategory', ProductsController.showProductByCategory);


module.exports = router;