const mongoose = require("mongoose");

//uri = "mongodb+srv://krishchal:krishchal@cluster0.klqd0.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async(uri) => {
    console.log("connected to db");
    
    return mongoose.connect(uri,{
       // useNewUrlParser : true,
       // useUnifiedTopology : true,
    });
};

module.exports = connectDB;