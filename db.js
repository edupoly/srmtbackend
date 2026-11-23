// db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Replace with your MongoDB connection string (local or MongoDB Atlas)
    const conn = await mongoose.connect(
      process.env.MONGO_URI || "mongodb://127.0.0.1:27017/my_database",
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
