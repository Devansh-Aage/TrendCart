const express = require('express');
const router = express.Router();
const Product = require('../models/Products')
const {  validationResult } = require('express-validator')
const fetchuser = require('../middleware/fetchuser');
const Fav = require('../models/Fav')

//Route 1:Get all the products
router.get('/fetchallproducts', fetchuser, async (req, res) => {

    //If there are errors , return bad requests and also errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const products = await Product.find({ user: req.user.id })
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected error occurred ");
    }
});


//Route 2:Add Products
router.post('/addproducts', fetchuser, async (req, res) => {

    try {
        const { title, price,image } = req.body;
        //If there are errors , return bad requests and also errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const product = new Product({
            title, price, image, user: req.user.id
        })
        const savedNote = await product.save()
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected error occurred ");
    }

});


//Route 3:Update Product
router.put('/updateproduct/:id', fetchuser, async (req, res) => {

    try {
        const { count } = req.body;
        //Create a New Note Object
        const newProduct = {};
        if (count) {
            newProduct.count = count;
        }

        //Find Note to be updated
        let product = await Product.findById(req.params.id);
        if (!product) res.status(404).send("Not Found");

        /* The code `if (product.user.toString() !== req.user.id)` is checking if the user making the
        request is the owner of the product. */
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Action Not Permitted")
        }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true });
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected notes error occurred ");
    }


});


//Route 4:Delete Product
router.delete('/deleteproduct/:id', fetchuser, async (req, res) => {
    try {

        //Find Note to be deleted
        let product = await Product.findById(req.params.id);
        if (!product) res.status(404).send("Not Found");


        //Verify the note belongs to right user
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Action Not Permitted")
        }
        product = await Product.findByIdAndDelete(req.params.id);
        res.json({ "Succes": "Product Deleted Succesfully", product: product });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occurred ");

    }

});


//Route 5:Get all fav the products
router.get('/fetchallfavproducts', fetchuser, async (req, res) => {

    //If there are errors , return bad requests and also errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const favProducts = await Fav.find({ user: req.user.id })
        res.json(favProducts);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected error occurred ");
    }
});


//Route 2:Add fav Products
router.post('/addfavproducts', fetchuser, async (req, res) => {

    try {
        const { title, price,image } = req.body;
        //If there are errors , return bad requests and also errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const favProduct = new Fav({
            title, price, image, user: req.user.id
        })
        const savedProd = await favProduct.save()
        res.json(savedProd);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Unexpected error occurred ");
    }

});

//Route 4:Delete fav Product
router.delete('/deletefavproduct/:id', fetchuser, async (req, res) => {
    try {

        //Find Note to be deleted
        let favProduct = await Fav.findById(req.params.id);
        if (!favProduct) res.status(404).send("Not Found");


        //Verify the note belongs to right user
        if (favProduct.user.toString() !== req.user.id) {
            return res.status(401).send("Action Not Permitted")
        }
        favProduct = await Fav.findByIdAndDelete(req.params.id);
        res.json({ "Succes": "Product Deleted Succesfully", favProduct: favProduct });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error occurred ");

    }

});

module.exports = router;