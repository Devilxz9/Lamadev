import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    throw new Error("MongoDB connection failed");
  }
};

export default connect;
