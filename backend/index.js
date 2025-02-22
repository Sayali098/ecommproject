const port = 3000;

const express = require('express');

const mongoose = require('mongoose')

const jwt = require('jsonwebtoken');

const multer = require('multer')

const path = require('path')

const cors = require('cors');
const { type } = require('os');
const { error } = require('console');
const app = express();

app.use(express.json())

app.use(cors())

//database connection with mongodb

// mongoose.connect("mongodb+srv://sayali_shelake:Sayali@9022@cluster0.pv5pyex.mongodb.net/e-commerce",
// { useNewUrlParser: true, useUnifiedTopology: true }
// )

const mongoURI = 'mongodb+srv://sayali_shelake:Sayali%409022@cluster0.pv5pyex.mongodb.net/e-commerce?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));
// mongodb+srv://sayali_shelake:<password>@cluster0.pv5pyex.mongodb.net/

app.get('/', (req, res) => {
    res.send("express app is running")
})

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload = multer({ storage: storage })

app.use('/images', express.static('upload/images'))

app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

//schema for creating product 
const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true,

    },
    date: {
        type: Date,
        default: Date.now
    },
    available: {
        type: Boolean,
        default: true
    }
})


app.post('/addproduct', async (req, res) => {

    const products = await Product.find({});
    let id;

    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1
    }
    else {
        id = 1;
    }



    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,

    })
    console.log(product)
    await product.save();
    console.log("saved");
    res.json({
        success: true,
        name: req.body.name
    })
})

//creating api for delete product
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    console.log("removed");
    res.json({
        success: true,
        name: req.body.name
    })
})

//creating api for getting all product

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});

    console.log("All products fetched");
    res.send(products);

})

// schema  creating  for user  model 
const Users = mongoose.model('Users', {
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,

    }

})

// creating endpoint for register user

app.post('/signup', async (req, res) => {
    let check = await Users.findOne({ email: req.body.email })
    if (check) {
        return res.status(400).json({ success: false, errors: 'Exixting user found with same email' })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret-ecomm');
    res.json({ success: true, token })
})

//creating endpoint for user login

app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }

            const token = jwt.sign(data, 'secret-ecomm')
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, errors: "wrong password" });
        }
    }
    else {
        res.json({ success: false, errors: "Wrong email id" })
    }
})


// creating endpoints for new collection data
app.get('/getcollections', async (req, res) => {

    let products = await Product.find({});
    let newcollections = products.slice(1).slice(-8)
    console.log('newcollections fetched')
    res.send(newcollections);
})

// creating endpoints for popularinWomen section

app.get('/popularInwomen', async (req, res) => {
    let products= await Product.find({category:"women"})
    let popularInwomen=products.slice(0,4);
    console.log("popular in women is fetched")
     res.send(popularInwomen)

})

const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{

            const data=jwt.verify(token,'secret-ecom')
            req.user=data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
    }

}

// creating endpoints for adding products to cartddata
app.post('/addtocart',fetchUser,async(req,res)=>{
console.log(req.body,req.user)

})

app.listen(port, (error) => {
    if (!error) {
        console.log('server is running on port', +port)
    }
    else {
        console.log("Error", +error)
    }
})
