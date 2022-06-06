import { Router } from "express";
import { productController } from "../controllers/product.js";

const router = new Router();

router.get("/", (req, res) => productController.getAll(res));

export default router;
