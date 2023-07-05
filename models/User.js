import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name:String,
    photo:String,
    googleid:{
        type:String,
        required:true,
        unique:true,
    },
role:{
    type:"String",
    enum:["admin", "user"],
    default:"user",
},

createAt:{
    type:Date,
    default:Date.now,
}
});

export const User = mongoose.model("User",schema); 