
const {ROLES} = require("../utils/constants");
const Admin = require("../models/Admin");

const changeUsername = async(req ,res) =>{
    if(req.role !== ROLES.admin){
        return res.status(401).json({message: "Access denied"})
    }

    try{

        const {previousUsername , newUsername } = req.body ;
        
        if(!username) {
            return res
            .status(400)
            .json({success : false , message : "Username to change is required "})
        }

        const user = await Admin.findOneAndUpdate(
            {
                username : previousUsername,
            },
            {
                username : newUsername,
            },
            {new: true}
        ) ; 

        if(!user){
            return res
            .status(404)
            .json({success : false , message : "Username does not exists "})
        }

        return res.status(200).json({success: true , message : `New username is ${user.username}`,
        user: {
            username : user.username,
            role: user.role ,

        }}) ;


    }catch(error){
        return res.sttus(500).json({message :"Internal server " + error.message , success : false});
    }
}

const changePassword = async(req,res) => { 

    console.log("Role : ",req.role);
    if(req.role !== ROLES.admin) {
        return res.status(401).json({success :false , message : "Access denied"})
    }

    try{
        const {username , previousPassword , newPassword } = req.body ;

        if(!previousPassword || !newPassword ){
            return res.status(400).json({
                success: false,
                message : "previous and new password is required"
            })
        }

        let user = await Admin.findOne({username});

        if(!user){
            return res
            .status(404)
            .json({success: false , message : "User not found "});
        }

        const isPasswordValid =  await bcrypt.compare(
            previousPassword,
            user.password
        );

        if(!isPasswordValid){
            return res
            .status(400)
            .json({success : false , message : "Invalid password , previous password is incoorect"})
        }


        const securePassword = await bcrypt.hash(newPassword,10);
        user.password = securePassword ; 
        await user.save();

        return res.status(200).json({
            success: true,
            message : "Password changed successfully",
        })



    }catch(error){
        return res.status(500).json({success : false , message : error.message})
    }








}

module.exports = {changePassword,changeUsername}
