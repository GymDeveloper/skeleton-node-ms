import { Router } from "express";
import * as Controller from "./controller";

const productRouter = Router();

productRouter.route("/").get(Controller.getProducts);

export default productRouter;
