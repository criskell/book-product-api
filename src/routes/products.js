import express from "express";

import ProductsController from "../controllers/products";

const router = express.Router();
const controller = new ProductsController();

router.get("/", (req, res) => controller.get(req, res));

export default router;