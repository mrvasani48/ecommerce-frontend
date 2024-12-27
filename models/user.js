import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
     unique:true
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
    unique:true
  },
  city: {
    type: String,
  },
  role:{
    type:String,
    enum:['user','admin'],
    required:true
  }
});

const User =mongoose.model("User",UserSchema)
export default User