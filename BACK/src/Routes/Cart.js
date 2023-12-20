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

routerCart.get("/cart-user/:username", getCartByUsernameController);

routerCart.post("/cart", addProductController);
routerCart.post("/cart/:username", addProductToCartController);

routerCart.delete("/cart/:id", deleteCartByIdController);

export default routerCart;