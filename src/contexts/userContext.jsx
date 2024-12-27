import { createContext, useContext } from "react";
import useApiFetch from "../hooks/ApiFetch";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  //fetch data for api
  const freeUsers = useApiFetch("http://localhost:5001/freeuser/user");
  // console.log(freeUsers);
  return (
    <UserContext.Provider  value={freeUsers}>{children}</UserContext.Provider>
  );
};
export default UserProvider;

//use userdata any compoenents to call fucntion 
export function Userdata() {
  return useContext(UserContext);
}
