import mongoose from "mongoose";

const schema = new mongoose.Schema({
    shippingInfo:{
        hNo:{
            type:String,
            required:true,
        },
        city:{
            type:String,
            required:true,
        },
        state:{
            type:String,
            required:true,
        },
        country:{
            type:String,
            required:true,
        },
        pincode:{
            type:Number,
            required:true,
        },
        phoneNo:{
            type:Number,
            required:true,
        },
    },

    orderItems:{
        cheeseBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        },

        vegCheeseBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        },

        onionBurger:{
            price:{
                type:Number,
                required:true,
            },
            quantity:{
                type:Number,
                required:true,
            }
        }
    },

    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },

    paymentMethod:{
        type:"String",
        enum:["COD","Online"],
        default:"COD",
    },

    paymentInfo:{
        type:mongoose.Schema.ObjectId,
        ref:"Payment"
    },

    paidAt:Date,

    itemsPrice:{
        type:Number,
        default:0, 
    },
    
    taxPrice:{
        type:Number,
        default:0, 
    },
    shippingCharge:{
        type:Number,
        default:0, 
    },
    totalAmount:{
        type:Number,
        default:0, 
    }, 

    orderStatus:{
        type:String,
        enum:["Preparing","Shipped","Delivered"],
        default:"Preparing",

    },

    deliverdAt:Date,
   createAt:{
    type:Date,
    default:Date.now,
   },
});

export const Order = mongoose.model("Order",schema);