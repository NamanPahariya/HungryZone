import ErrorHandler from "../Utils/ErrorHandler.js"


export const isAuthenticate = (req,res,next)=>{
const token = req.cookies["connect.sid"];
 
if(!token){
    return next(new ErrorHandler("Not Logged In", 401))
} 
  
next();
};

export const authorizeAdmin = (req,res,next)=>{
if(req.user.role!=="admin") {
    return next(new ErrorHandler("only Admin allowed",405));
}  
next();
};