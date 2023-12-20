import express from 'express';
import routerCart from '../Routes/Cart.js';
import routerProducts from '../Routes/products.js'
import routeError from '../Utils/RouteError.js';

const server = express();

server.use(express.json());

server.use('/api/', routerProducts);
server.use('/api/', routerCart);

server.use(routerError)

export default server;

server.use(routeError)
