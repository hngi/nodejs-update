import mongoose from "mongoose";
import { Schema } from "mongoose";

const GuestSchema = new Schema({
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Guest", GuestSchema);
