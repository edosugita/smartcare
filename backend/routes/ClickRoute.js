import express from "express";
import { getClickById, updateClick } from "../controllers/ClickController.js";

const router = express.Router();

router.get('/produk/data/plaster/jumlah-click/:id', getClickById);
router.patch('/produk/data/plaster/jumlah-click/:id', updateClick);

export default router;