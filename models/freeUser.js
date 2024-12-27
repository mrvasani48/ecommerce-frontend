import mongoose from "mongoose";
import "mongoose-type-url";
const Schema = mongoose.Schema;
const FreeUserSchema = new Schema({
  id: {
    type: Number,
    required:true,
  },
  name: {
    type: String,
    required:true,
  },
  username: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  address: {
    street: {
      type: String,
      required:true,
    },
    suite: {
      type: String,
      required:true,
    },
    city: {
      type: String,
      required:true,
    },
    zipcode: {
      type: String,
      required:true,
    },
    geo: {
      lat: {
        type: String,
        required:true,
      },
      lng: {
        type: String,
        required:true,
      },
    },
  },
  phone: {
    type: String,
    required:true,
  },
  website: mongoose.SchemaTypes.Url,
  company: {
    name: {
      type: String,
      required:true,
    },
    catchPhrase: {
      type: String,
      required:true,
    },
    bs: {
      type: String,
      required:true,
    },
  },
});

const FreeUser=mongoose.model("FreeUser",FreeUserSchema)
export default FreeUser