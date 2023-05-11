"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsController_1 = require("../controllers/ProductsController");
const productRoute = (0, express_1.Router)();
productRoute.post('', ProductsController_1.addProduct);
productRoute.get('', ProductsController_1.getAllProducts);
productRoute.get('/:Product_id', ProductsController_1.getOneProduct);
productRoute.put('/:Product_id', ProductsController_1.updateProduct);
productRoute.delete("/:Product_id", ProductsController_1.deleteProduct);
// productRoute.put('/:Product_id',getOneProduct)
exports.default = productRoute;
