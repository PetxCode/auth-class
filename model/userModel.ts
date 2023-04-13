import mongoose from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  OTP: string;
  RCNumber: string;
  staffID: string;
  token: string;
  verified: boolean;
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    OTP: {
      type: String,
    },
    RCNumber: {
      type: String,
    },
    staffID: {
      type: String,
    },
    token: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "companies",
    },
  },
  { timestamps: true },
);

export default mongoose.model<iUserData>("users", userModel);
