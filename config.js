import dotenv from "dotenv";
dotenv.config();
const env = process.env.NODE_ENV;

export const configs = {
  local: {
    port: process.env.PORT,
    environment: "local",
    db_name: process.env.DB_NAME,
  },
};
