import { useState } from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

const Login = () => {
   const [formState, setFormState] = useState({ email: "", password: "" });
   const [login, { error }] = useMutation(LOGIN);

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      try {
         const mutationResponse = await login({
            variables: { email: formState.email, password: formState.password },
         });
         const token = mutationResponse.data.login.token;
         Auth.login(token);
      } catch (error) {
         console.log(error);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   return (
      <div className="card container col-8 col-lg-6 col-xl-4 my-1">
         <h1 className="">Login</h1>
         <form className="m-auto" onSubmit={handleFormSubmit}>
            <div className="my-2">
               <label htmlFor="email" className="d-block">
                  Email:
               </label>
               <input placeholder="email" name="email" type="email" id="email" onChange={handleChange} />
            </div>
            <div className="my-2">
               <label htmlFor="password" className="d-block">
                  Password:
               </label>
               <input placeholder="password" name="password" type="password" id="password" onChange={handleChange} />
            </div>
            <div className="text-center my-3">
               <button className="btn m-auto btn-dark w-100">Submit</button>
            </div>
         </form>
         {error && 
         <strong className="text-center text-danger">Incorrect Credentials</strong>
         }
         <Link to="/signup" className="text-center mb-2">
            Don't have an account? Signup here!
         </Link>
      </div>
   );
};

export default Login;
