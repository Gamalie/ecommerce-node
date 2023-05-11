import { Router } from "express";
import { addProduct,getAllProducts,getOneProduct,updateProduct,deleteProduct } from "../controllers/ProductsController";

const productRoute=Router()

productRoute.post('',addProduct)
productRoute.get('',getAllProducts)
productRoute.get('/:Product_id',getOneProduct)
productRoute.put('/:Product_id',updateProduct)
productRoute.delete("/:Product_id", deleteProduct)
// productRoute.put('/:Product_id',getOneProduct)




export default productRoute
