import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connectionInstance= await mongoose.connect
        (`${process.env.MONGODB_URI}`)
        console.log(`\n MongoDB Successful conected
            ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo Connection failed", error);
        process.exit(1)
        
    }
}
export default connectDB;