import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "Wd-compiler",
    });
    console.log("connection established");
  } catch (error) {
    console.log("error connection to database")
  }
};
