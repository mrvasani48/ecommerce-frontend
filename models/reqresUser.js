import mongoose from "mongoose";
import "mongoose-type-url";
const Schema = mongoose.Schema;

const ReqresUserSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required:true,
  },
  last_name: {
    type: String,
    required:true,
  },
  avatar: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
});

const ReqresUser = mongoose.model("ReqresUser", ReqresUserSchema);
export default ReqresUser;
