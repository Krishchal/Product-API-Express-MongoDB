const Product = require("../models/product");

const getAllProducts = async(req,res) => {
   res.status(200).json({ msg : " this is getAllProduct route" });
   
};

const getAllProductsTesting = async(req,res) => {
   const { company,name,featured,sort,select } = req.query;

   const queryObject = {};
    
   if(company)
   {
      //queryObject.company = company;
      queryObject.company = { $regex: company, $options: "i" };
   }
   if(name)
   {
      queryObject.name = { $regex: name, $options: "i" }; // 'i' for case-insensetive
   }
   if(featured)
   {
      queryObject.featured = featured;
   }

   let apiData = Product.find(queryObject);
   //Sorting 
   if(sort)
   {
      let sortFix = sort.replace(","," ");
      apiData = apiData.sort(sortFix);  
   }
   //select
   if(select)
   {
      //let selectFix = select.replace(","," ");
      let selectFix = select.split(",").join(" ");
      apiData = apiData.select(selectFix);
   }
   
   const productData = await apiData;
    res.status(200).json({productData});
};

module.exports = { getAllProducts, getAllProductsTesting };