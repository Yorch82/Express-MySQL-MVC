const db = require('../config/database.js');


const CategoriesController = {
    createTable (res,req) {
        let sql =
        "CREATE TABLE categories(id INT AUTO_INCREMENT,name VARCHAR(255), PRIMARY KEY(id))";
        db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Categories table created...");
    });
    },
    create (res,req) {        
        let sql =`INSERT INTO expressdb.categories (name) values ('${req.body.name}')`;
        db.query( sql, (err, result) => {
            if (err) throw err;
            res.send("Categorie added...");
        });        
    },
    updateCategorie (res,req) {        
        const updateCategorie = req.body.name;
        let sql =`UPDATE categories SET name='${updateCategorie}' WHERE id = ${req.params.id}`;
        db.query (sql, (err, result) => {
            if (err) throw err;
            res.send("Categorie updated...");
        })        
    },
    showCategories(req,res){        
        let sql = "SELECT * FROM categories";
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    showcategoriesById(req,res){        
        let sql = `SELECT * FROM categories WHERE id=${req.params.id}`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            res.send(results);
        });        
    },
    createProductcategories (req,res){        
        let sql =
        `CREATE TABLE expressDB.productoscategorias(id INT AUTO_INCREMENT,product_id INT, category_id INT,PRIMARY KEY(id),
                FOREIGN KEY(product_id) REFERENCES expressDB.products(id) ON DELETE CASCADE,
                FOREIGN KEY(category_id) REFERENCES expressDB.categories(id));`;
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send("... table created...")
        });        
    }
}



module.exports = CategoriesController;