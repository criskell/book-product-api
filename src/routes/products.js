import express from "express";

import ProductsController from "../controllers/products";
import Product from "../models/product.js";

const router = express.Router();
const controller = new ProductsController(Product);

router.get("/", (req, res) => controller.get(req, res));
router.get("/:id", (req, res) => controller.getById(req, res));
router.post("/", (req, res) => controller.create(req, res));

export default router;