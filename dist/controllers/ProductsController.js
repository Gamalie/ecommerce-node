"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getOneProduct = exports.getAllProducts = exports.addProduct = void 0;
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
const uuid_1 = require("uuid");
//(Product_id VARCHAR(100),Product_name VARCHAR(100),Product_description VARCHAR(1000),Product_price INT, Product_image VARCHAR(300),isDelete INT DEFAULT(0))
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let Product_id = (0, uuid_1.v4)();
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const { Product_name, Product_description, Product_price, Product_image } = req.body;
        pool.request()
            .input('Product_id', Product_id)
            .input('Product_name', Product_name)
            .input('Product_description', Product_description)
            .input('Product_price', Product_price)
            .input('Product_image', Product_image)
            .execute('addProducts');
        console.log('weee');
        return res.status(201).json({ message: "Product Added Successfully" });
    }
    catch (error) {
        //server side error
        return res.status(500).json(error.message);
    }
});
exports.addProduct = addProduct;
//GET ALL PRODUCT
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        let products = (yield pool.request().execute('getAllProducts')).recordset;
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.getAllProducts = getAllProducts;
//GET ONE PRODUCT
const getOneProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Product_id } = req.params;
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        let product = (yield pool.request()
            .input('Product_id', Product_id)
            .execute('getOneProduct')).recordset[0];
        if (!product) {
            return res.status(404).json({ message: "Property Not Found" });
        }
        return res.status(200).json(product);
    }
    catch (error) {
        //server side error
        return res.status(500).json(error.message);
    }
});
exports.getOneProduct = getOneProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const { Product_id } = req.params;
        let product = (yield pool.request()
            .input('Product_id', Product_id)
            .execute('getOneProduct')).recordset;
        if (!product.length) { //no user found
            return res.status(404).json({ message: "Product Not Found" });
        }
        //continue with the update process
        const { Product_name, Product_description, Product_price, Product_image } = req.body;
        yield pool.request()
            .input('Product_id', Product_id)
            .input('Product_name', Product_name)
            .input('Product_description', Product_description)
            .input('Product_price', Product_price)
            .input('Product_image', Product_image)
            .execute('updateProducts');
        return res.status(200).json({ message: "Products Updated" });
    }
    catch (error) {
        //server side error
        return res.status(500).json(error.message);
    }
});
exports.updateProduct = updateProduct;
///delete Property 
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const { Product_id } = req.params;
        let product = (yield pool.request()
            .input('Product_id', Product_id)
            .execute('getOneProduct')).recordset;
        if (!product.length) {
            return res.status(404).json({ message: "Product Not Found" });
        }
        yield pool.request().input("Product_id", Product_id).execute('deleteOneProduct');
        return res.status(200).json({ message: "Product Deleted Successfully" });
    }
    catch (error) {
        return res.status(500).json(error.message);
    }
});
exports.deleteProduct = deleteProduct;
