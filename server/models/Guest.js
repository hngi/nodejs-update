import mongoose from "mongoose";
const { Schema }  = mongoose;

const GuestSchema = new Schema({
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Guest", GuestSchema);
