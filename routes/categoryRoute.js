import express from "express";
import { createCategory, viewCategory, deleteCategory, getCategoryByName, getCategoryByPrice, updateCategory, viewAllCategory } from "../controllers/categorryController.js";


const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/all-categories", viewAllCategory);
categoryRouter.get("/", viewCategory);
categoryRouter.put("/:name", updateCategory);
categoryRouter.get("/getname/:name", getCategoryByName);
categoryRouter.get("/getprice/:price", getCategoryByPrice);
categoryRouter.delete("/:name", deleteCategory);

// categoryRouter.delete("/", deleteCategory);

export default categoryRouter;