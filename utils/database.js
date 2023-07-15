import mongoose from "mongoose";
let isConnected = false;

export const connectToDb = async () => {
  mongoose.set(strictQuery, true);
  if (isConnected) {
    console.log("MongoDB connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "test",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
