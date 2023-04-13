import mongoose from "mongoose";

interface iUser {
  name: string;
  email: string;
  password: string;
  OTP: string;
  RCNumber: string;
  token: string;
  verified: boolean;
  staff: {}[];
}

interface iUserData extends iUser, mongoose.Document {}

const companyModel = new mongoose.Schema(
  {
    name: {
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
    token: {
      type: String,
    },
    verified: {
      type: Boolean,
    },
    staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model<iUserData>("companies", companyModel);
