// dependencies
const mongoose = require("mongoose");

// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDB connection error:", error);

    process.exit(1);
  }
};

// export connection
module.exports = connectDB;