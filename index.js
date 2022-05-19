const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
const db = require('./config/database')
 


app.get("/createtable/productoscategorias", (req,res) => {
    let sql =
    `CREATE TABLE expressDB.productoscategorias(id INT AUTO_INCREMENT,product_id INT, category_id INT,PRIMARY KEY(id),
         FOREIGN KEY(product_id) REFERENCES expressDB.products(id) ON DELETE CASCADE,
         FOREIGN KEY(category_id) REFERENCES expressDB.categories(id));`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send("... table created...")
    });
});

app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'))


app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));