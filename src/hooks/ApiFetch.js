import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useApiFetch= (url) => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
     const fetchUser=async()=>{
       try{
        //fetch data from api 
       const response =await axios.get(url)
       setUser(response.data);
       }
       catch(error){
         //id error occurred 
        console.log(error);
        toast.error(error.message)
       }
     }
    fetchUser()
  }, []);
  return user;
};
export default useApiFetch;
