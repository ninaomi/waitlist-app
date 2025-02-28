import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    private: true,
    required: true,
    unique: true,
  },

 
});

export default mongoose.models.User || mongoose.model("User", userSchema);
