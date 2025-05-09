const mongoose = require("mongoose");


const adminSchema = mongoose.Schemma({
    username : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type: String ,
        required : true,

    },
    role: {
        type : String,
        default : "admin",
        enum : ["admin"],
    },
},{
    timestamps : true
}
);

const Admin = mongoose.model("Admin",adminSchema);
module.exports = Admin ;

