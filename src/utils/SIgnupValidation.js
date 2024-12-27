import * as Yup from "yup";
const validationSchema = Yup.object({

  name: Yup.string()
    .min(2, "name too short!")
    .max(50, "name too Long!")
    .required("name filed is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("email filed is required"),

  password: Yup.string()
    .min(4, "password too short!")
    .max(16, "password too  Long!")
    .required("password filed is required"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("confirm pasword filed is required"),
    
  mobile: Yup.string()
    .min(10, "enter valid mobile number")
    .max(10, "enter valid mobile number")
    .required("mobile number filed is required"),
  city: Yup.string(),
  role: Yup.string()
       .required("select role")
});
export default validationSchema;
