import ReqresUser from "../models/reqresUser.js";

const reqresController = {
  //get  user
  getUsers: async (req, res) => {
    try {
      //get all user
      const users = await ReqresUser.find();
      const message = {
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!",
      };
      res.json({
        page: 1,
        per_page: 6,
        total: 1,
        total_pages: 1,
        data: users,
        support: message,
      });
    } catch (error) {
      res.json({ message: error.message, status: 404 });
    }
  },
  addUsers: async (req, res) => {
    try {
      const { id, email, first_name, last_name, avatar } = req.body;
      //check user is exist
      const user = await ReqresUser.findOne({ id: id });
      if (!user) {
        // user store in db
        const data = await ReqresUser.create({
          id,
          email,
          first_name,
          last_name,
          avatar,
        });
        //user add successfully
        res.json({ message: "success", data: data, status: 204 });
      } else {
        //responce user is already exist
        res.json({ message: "user id already used", status: 200 });
      }
    } catch (error) {
      res.json({ message: error.message, status: 404 });
    }
  },
};
export default reqresController;
