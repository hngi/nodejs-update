import mongoose from "mongoose";
const { Schema }  = mongoose;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  link: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", UserSchema);
