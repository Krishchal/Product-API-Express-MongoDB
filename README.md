# Product API with Express and MongoDB

This is a RESTful API built using **Node.js**, **Express.js**, and **MongoDB**. The API allows querying, filtering, and sorting products from the database, 
and provides different routes to interact with product data.

## Features

- **GET** all products
- Query products by `name`, `company`, and `featured`
- Sort products by various parameters
- Select specific fields for the response
- Integrated with MongoDB for data storage

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing product data
- **Mongoose**: ODM for MongoDB to interact with the database
- **dotenv**: For environment variable management

## Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Product-API-Express-MongoDB.git
2. Navigate into the project directory:
    ```bash
   cd Product-API-Express-MongoDB
3.Install all dependencies:
    
          Install all dependencies:
4.Create a .env file in the root directory and add your MongoDB connection string:

       MONGODB_URL=your_mongodb_connection_string
       PORT=3003
5.Seed the database with product data:

    node productDB.js
6.Start the server
      
      npm start


API Endpoints
Root Endpoint
GET /
Response: i am alive
Product Routes
GET /api/products

Fetches all products.
Example Response:
json
Copy code

      {
        "msg": "this is getAllProduct route"
      }
GET /api/products/testing

Fetches products based on query parameters.

Query Parameters:

company (string) - Filters products by company.
name (string) - Filters products by product name.
featured (boolean) - Filters products based on featured status.
sort (string) - Sorts the results based on the provided field(s).
select (string) - Selects specific fields to be included in the response.
Example Request:

bash
Copy code
GET /api/products/testing?company=Apple&sort=price&select=name,price
Example Response:

json
Copy code


    {
      "productData": [
        {
          "name": "iPhone 13",
          "price": 999
        }
      ]
    }
MongoDB Schema
The product schema used in MongoDB includes the following fields:

name: String (required)
price: Number (required)
featured: Boolean (default: false)
rating: Number (default: 4.8)
createdAt: Date (default: Date.now)
company: String (Enum: "Apple", "Samsung", "Dell", "Mi")

File Structure


├── app.js
├── controllers
│   └── products.js
├── db
│   └── connect.js
├── models
│   └── product.js
├── routes
│   └── products.js
├── products.json
├── productDB.js
├── .env
└── package.json



