import mongoose from "mongoose";

let connected = false;

export async function connectDB() {
  if (connected) {
    return;
  }
  connected = true;
  await mongoose.connect("mongodb://127.0.0.1:27017/courses");
}
