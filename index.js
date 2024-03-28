const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./route/product.route.js");
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("hello form node API server");
});





mongoose.connect("mongodb+srv://mohammadhaziqmy:eGbB6h54fouvf4fl@cluster0.34oiu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.log("Connection failed!", error); // Log the actual error
    });

