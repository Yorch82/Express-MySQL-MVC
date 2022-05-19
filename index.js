const express = require('express');
const app = express();
const port = 4000;
app.use(express.json());
const db = require('./config/database')
 
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'))

app.listen(port, () => console.log(`Servidor levantado en puerto ${port}`));