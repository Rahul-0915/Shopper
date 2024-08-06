//define port
const port = 4000;
//include all packege
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
//express server path
const path = require("path");
const cors = require("cors");
const { error } = require("console");

//will get request and give the response it convert or parse throw json  
app.use(express.json());
//using this our project connect express to 4000 port
app.use(cors());
//connect to database

// Database connection with mongoDB

mongoose.connect("mongodb://localhost:27017/Ecommerce");

//API creation
app.get("/",(req,res)=>{
      res.send("Express App is Running");
});

//image upload 
//image storage Engine
const storage = multer.diskStorage({
      destination:'./upload/images',
      filename:(req,file,cb)=>{
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
      }
})
//upload function and pass to configration
const upload = multer({storage:storage})
//Creating Upload Endpoint for images
//for get and store images
app.use('/imges',express.static('upload/images'))
//for upload image
app.post("/upload",upload.single('product'),(req,res)=>{
      res.json({
            succes:1,
            image_url:`http://localhost:${port}/images/${req.file.filename}`,
      })
})

//Schema for creating Products
const Product = mongoose.model("Product",{
      id:{
            type: Number,
            required:true,
      },
      name:{
            type:String,
            required:true,
      },
      image:{
            type:String,
            require:true,
      },
      category:{
            type:String,
            required:true,
      },
      new_price:{
            type:Number,
            required:true,
      },
      old_price:{
            type:Number,
            required:true,
      },
      date:{
            type:Date,
            default:Date.now,
      },
      avilable:{
            type:Boolean,
            default:true,
      },
});

//endpoint 
app.post('/addproduct',async (req,res)=>{
      //it is find in product table products
      let products = await Product.find({});
      let id;
      //if there is product is not empty than increase id
      if(products.length>0)
      {
            let last_product_array = products.slice(-1);
            let last_product = last_product_array[0];
            id = last_product.id+1;
      }
      //if there is no product in database
      else
      {
            id=1;
      }
      const product = new Product({
            id:id,
            name:req.body.name,
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price,
      });
      console.log(product);
      //save data in database
      await product.save();
      console.log("Saved");
      //response
      res.json({
            succes:true,
            name:req.body.name,
      });
});

//Create API for deleting products

app.post('/removeproduct',async (req,res)=>{
      await Product.findOneAndDelete({id:req.body.id});
      console.log("Removed");
      res.json({
            succes:true,
            name:req.body.name
      })
})

//Creating API for getting all products
app.get('/allproducts',async (req,res)=>{
      let products = await Product.find({});
      console.log("All Product Fetched");
      res.send(products);
})

app.listen(port,(error)=>{
      if (!error)
      {
            console.log("Server Running on Port "+port);
      }
      else
      {
            console.log("Error:"+error);
      }
})
