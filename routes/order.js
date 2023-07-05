import  express from "express";
import { getMyOrders, placeOrder,getOrderDetails, getAdminOrders, processOrder, placeOrderOnline} from "../controllers/order.js";
import { authorizeAdmin, isAuthenticate } from "../middlewares/auth.js";

const router = express.Router();
router.post("/createorder",  placeOrder );
router.post("/createorderonline", placeOrderOnline)

router.get("/myorders", isAuthenticate, getMyOrders)
router.get("/order/:id", isAuthenticate, getOrderDetails)
router.get("/admin/orders/", isAuthenticate,authorizeAdmin, getAdminOrders)
router.get("/admin/order/:id", isAuthenticate,authorizeAdmin, processOrder)


export default router;