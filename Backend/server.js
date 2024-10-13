/*return code for server.js*/
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/product.route.js';

//const cors = require('cors');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port http:/localhost:${PORT}`);
}
);
