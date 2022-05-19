const db = require('../config/database.js');

const ProductsController = {
    create(req,res){        
        let sql = `INSERT INTO expressdb.products (name, price, existencias) values
            ('${req.body.name}', '${req.body.price}','${req.body.units}' );`;
        db.query(sql, (err, result) => {
          if (err) throw err;      
          res.send("Product added...");
        })        
    },
    createDb(res,req){        
        let sql = "CREATE DATABASE expressDB";
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Database created...");
        });       
    },
    createTable(req, res){
        let sql =
            "CREATE TABLE products(id INT AUTO_INCREMENT,name VARCHAR(255), price FLOAT, units INT, PRIMARY KEY(id))";
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send("Products table created...");
            });
    },
    updateProduct(req,res){        
        const updateProduct = {        
            name: req.body.name,
            price: req.body.price,
            existencias: req.body.existencias      
        };    
        let sql = `UPDATE products SET name='${updateProduct.name}', price='${updateProduct.price}', existencias='${updateProduct.existencias}' WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("Product updated...");
        });          
    },
    showProducts(req,res){        
        let sql = "SELECT * FROM products";
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    showProductsById(req,res){        
        let sql = `SELECT * FROM products WHERE id=${req.params.id}`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    showOrderedProducts(req,res){        
        let sql = `SELECT * FROM products ORDER BY id DESC`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    showProductByName(req,res){        
        let sql = `SELECT * FROM products WHERE id=${req.params.name}`;
        db.query(sql, (err, results) => {
            if (err) throw err;
             res.send(results);
        });        
    },
    deleteProductById (req,res){        
        let sql = `DELETE FROM products WHERE id=${req.params.id}`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    showProductByCategory(req,res){        
        let sql = `SELECT products.name, categories.name FROM products INNER JOIN categories ON products.id = categories.id`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });        
    }
}

module.exports = ProductsController;