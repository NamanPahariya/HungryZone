import  express  from "express";
import passport from "passport";
import { getAdminStats, myProfile } from "../controllers/user.js";
import { logout, getAdminUsers } from "../controllers/user.js";
import { authorizeAdmin, isAuthenticate} from "../middlewares/auth.js";

const router = express.Router();


router.get(
    "/googlelogin", 
    passport.authenticate("google",{
        scope:["profile"],
    })
);

router.get(
    "/login", 
    passport.authenticate("google",{
        successRedirect: process.env.FRONTEND_URL,
    }), 
);

router.get("/me",isAuthenticate, myProfile)
router.get("/logout", logout)


router.get("/admin/users",isAuthenticate,authorizeAdmin,getAdminUsers)
router.get("/admin/stats", isAuthenticate,authorizeAdmin,getAdminStats)

export default router;