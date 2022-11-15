import express from "express";

import productsRouter from "./products";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello, world!"));
router.use("/products", productsRouter);

export default router;