import mongoose from "mongoose";
const dbUrl = process.env.API
mongoose
  .connect(dbUrl)
  .then(() => console.log("database connect succeefully"))
  .catch((error) => console.log(error));
export default mongoose