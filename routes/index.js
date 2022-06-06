import { Router } from "express";

import productRoutes from "./product.js";

const router = new Router();

router.get("/healths", (req, res) => res.status(200).json({ status: "up" }));
router.use("/produto", productRoutes);

export default router;
