var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/mims-shop');

var Product = require('./models/product');
var WishList = require('./models/wishlist');

var output;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', async (request,response)=>{
    var product = new Product();
    product.title = request.body.title;
    product.price = request.body.price;

    output = await product.save();
    response.send(output);
})

app.listen(3000, ()=>{
    console.log("Mims shop API running on port:3000")
});