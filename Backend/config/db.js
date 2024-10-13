/*write code to connect to the database*/
// /*return code for server.js*/
//
// with this snippet from Backend/config/db.js:
// /*return code for db.js*/
import mongoose from 'mongoose';

const connectDB = async () =>  {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;


