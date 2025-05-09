const {ROLES} =require("../utils/constants");
const cloudinary = require("../utils/cloudinary");
const createProduct = async(req , res) => {
    if(req.role !== ROLES.admin){
        return res.status(401).json({success:false, message: "Access Denied"});
    }

    try{
        const {name,price,description,stock, colors , category} = req.body;
        const uploadedImages = [];

        for(const file of req.files){
            const result = await cloudinary.uploader.upload(req.files[file].path,{
                folder : "products",
            });

            uploadedImages.push({

                url: result.secure_url,
                id: result.public_id,

            })
        }

        const product = new Product({
            name,
            price,
            description,
            stock,
            colors,
            category,
            images : uploadedImages,
        });



        await product.save();

        return res.status(201).json({success:true , meessage: "Product addded successfully" , data : product});




    }catch(error){
        return res.status(500).json({success : false , mess})
    }
}

const updateProduct = async(req , res) => {
    if(req.role !== ROLES.admin){
        return res.status(401).json({success: false, message: "Access denied"})
    }

    try{

        const {...data} = req.body;
        const {id} = req.body;

        const product = await Product.findByIdAndUpdate(id,data,{new: true});
        if(!product) {
            return res.status(404).json({success: false , message : "Product not found"})
        }


        return res.status(200).json({
            success: true ,
            message : "Product updated successfully ",
            data: product, 
        })



    }catch(error){
        return res.status(500).json({success : false , message: error.message})
    }
}

const deleteProduct = async(req ,res) => {
    if(req.role !== ROLES.admin){
        return res.status(401).json({success: false , message : "Access denied"})
    }

    try{
        const {id} = req.params ; 

        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({success : false , message : "Product not found "});

        }

        return res
        .status(200)



    }catch(error){
        return res.status(500).json({success : false , message : error.message})
    }
}


module.exports = {createProduct};