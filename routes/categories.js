const express = require('express');
const CategoriesController = require('../controllers/CategoriesController');
const router = express.Router();

router.get("/createtable/categories", CategoriesController.createTable);
router.post ("/addCategorie", CategoriesController.create);
router.put("/updateCategorie/:id", CategoriesController.updateCategorie);
router.get("/showCategories", CategoriesController.showCategories);
router.get("/showCategories/id/:id", CategoriesController.showcategoriesById);


module.exports = router;