import express from "express";
import { getA } from "../controllers/aController";

const router = express.Router();

router.route("/").get(getA);

export default router;
