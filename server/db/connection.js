const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if(connection.STATES.connecting){
            console.log(`connecting DB to ${connection.connection.host}`)
        }
        
        if(connection.STATES.connected){
            console.log(`connected DB to ${connection.connection.host}`);
        }
        
        if(connection.STATES.disconnected){
            console.log(`disconnected DB to ${connection.connection.host}`)
        }
        







    }catch(error){
        console.log("Error connecting to database")
    }


}



module.exports = {connectDB};