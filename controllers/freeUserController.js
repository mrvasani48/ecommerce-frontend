import FreeUser from "../models/freeUser.js";

const freeUserController = {
  //get  user
  getUsers: async (req, res) => {
    try {
      //get all user
      const users = await FreeUser.find();
      res.json( users);
    } catch (error) {
      res.json({ message: error.message, status: 404 });
    }
  },
  addUsers: async (req, res) => {
    try {
      const { id, name, username, email, address, phone, website, company } =
        req.body;
      //check user is exist
      const user = await FreeUser.findOne({ id: id});
      if (!user) {
        // user store in db
        const data = await FreeUser.create({
          id,
          name,
          username,
          email,
          address,
          phone,
          website,
          company,
        });
        //user add successfully
        res.json({ message: "success", data: data, status: 200 });
      } else {
        //responce user is already exist
        res.json({ message: "user id already exist", status: 200 });
      }
    } catch (error) {
      res.json({ message: error.message, status: 404 });
    }
  },
};

export default freeUserController