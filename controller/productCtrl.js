const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbid");

const createProduct = asyncHandler(async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);        
    } catch (error) {
        throw new Error(error);
    }
});

const getProduct = asyncHandler(async (req, res) => {
    let { id } = req?.params;
    validateMongoDbId(id);
    try {
        const product = await Product.findById(id);
        res.json({ product });
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const getAllProducts = await Product.find();
        res.json(getAllProducts);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {createProduct, getProduct, getAllProduct};