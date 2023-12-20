import express from "express";
import {
  getCartsController,
  getCartByIdController,
  addProductToCartController,
  deleteCartByIdController,
  getCartByUsernameController,
  addProductController
} from "../Controller/Cart";

const routerCart = express.Router();

routerCart.get("/carts", getCartsController);

routerCart.get("/cart/:id", getCartByIdController);

routerCart.get("/cart-user/:name", getCartByUsernameController);

routerCart.post("/cart", addProductController);
routerCart.post("/cart/:name", addProductToCartController);

routerCart.delete("/cart/:id", deleteCartByIdController);

export default routerCart;