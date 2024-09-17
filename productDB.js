require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");

const start = async() => {
    try {
         //console.log(process.env.MONGODB_URL); // Add this before await connectDB

         await connectDB(process.env.MONGODB_URL);
         await Product.deleteMany();  // to remove dublicate entry in Database
         await Product.create(ProductJson);
        
        console.log("Created successfully");
    } catch (error) {
        console.log(error);
        
    }
};

start();
