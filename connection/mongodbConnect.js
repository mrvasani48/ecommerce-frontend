import mongoose from "mongoose";
const dbUrl = "mongodb+srv://kishan:kishan@kishan.6tkak.mongodb.net/react-node?retryWrites=true&w=majority" 
mongoose
  .connect(dbUrl)
  .then(() => console.log("database connect succeefully"))
  .catch((error) => console.log(error));
export default mongoose