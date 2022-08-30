import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const Signup = () => {
   const [formState, setFormState] = useState({ firstName: "", lastName: "", email: "", password: "" });
   const [addUser] = useMutation(ADD_USER);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormState({
         ...formState,
         [name]: value,
      });
   };

   const handleFormSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await addUser({
        variables: {
            firstName: formState.firstName,
            lastName: formState.lastName,
            email: formState.email,
            password: formState.password,
        },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
   };

   return (
      <div className="card container col-8 col-lg-6 col-xl-4 my-1">
         <h1 className="">Signup</h1>
         <form className="m-auto" onSubmit={handleFormSubmit}>
            <div className="my-2">
               <label htmlFor="firstName" className="d-block">
                  First Name:
               </label>
               <input placeholder="first name" name="firstName" type="firstName" id="firstName" onBlur={handleChange} />
            </div>
            <div className="my-2">
               <label htmlFor="lastName" className="d-block">
                  Last Name:
               </label>
               <input placeholder="last name" name="lastName" type="lastName" id="lastName" onBlur={handleChange} />
            </div>
            <div className="my-2">
               <label htmlFor="email" className="d-block">
                  Email:
               </label>
               <input placeholder="email" name="email" type="email" id="email" onBlur={handleChange} />
            </div>
            <div className="my-2">
               <label htmlFor="password" className="d-block">
                  Password:
               </label>
               <input placeholder="*******" name="password" type="password" id="password" onBlur={handleChange} />
            </div>
            <div className="text-center my-3">
               <button className="btn m-auto btn-dark w-100">Create Account</button>
            </div>
         </form>
         <Link to="/login" className="text-center mb-2">
            Already have an account? Login here!
         </Link>
      </div>
   );
};

export default Signup;
