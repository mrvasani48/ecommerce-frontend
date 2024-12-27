import User from "../models/user.js";
import jwt from "jsonwebtoken";

const userControllers = {
  //sign-up user Controllers
  signUp: async (req, res) => {
    try {
      const { name, email, password, number, city ,role} = req.body;
      const isExist = await User.exists({ email: email });
      //new user
      if (!isExist) {
        const userData = await User.create({
          name,
          email,
          password,
          number,
          city,
          role
        });
        res.status(200).json({
          message: "register successfully ",
          data: userData,
          status: 200,
        });
      } else {
        //responce user alreadey exist
        res.status(404).json({ message: "user already exist", status: 404 });
      }
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //get user Controllers
  getUser: async (req, res) => {
    try {
      const allUser = await User.find();
      res
        .status(200)
        .json({ message: "successfully get user", allUser, status: 200 });
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //login user  Controllers
  loginUser: async (req, res) => {
    try {
      const { email, password,role } = req.body;
      const isExist = await User.findOne({ email: email });

      // console.log(isExist);
      //check user email and  password is correct or not
      if (isExist && password == isExist.password) {

         //check role is correct or not
         if(role==isExist.role)
         {
          // Create token
          const token = jwt.sign({ email:email,user_id:isExist._id }, "45645454");
          res
            .status(200)
            .json({ message: "successfully login", token: token,data:isExist, status: 200 });
         }else{
          res
          .status(404)
          .json({ message: "wrong role selected", status: 404 });
         }
       
      } else {
        res.status(404).json({ message: "email/password incorrect", status: 404 });
      }
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
};

export default userControllers;
