import React, { useContext } from "react";
import { useState } from "react";
import { ReactComponent as Svg } from "./drawing.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, user, authReady } = useContext(AuthContext);
  const navigate = useNavigate();

  const signUpHandler = (e) => {
    e.preventDefault();
    signUp(email, password).then(() => {
      console.log("sign up success!");
      navigate("/");
    });
  };

  if (authReady === true && user !== null) {
    return <div>Already logged in</div>;
  }
  if (authReady !== true) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form
        className="bg-white w-full lg:w-auto lg:w-1/3 rounded-md flex flex-col shadow-md items-center p-4 mr-0 "
        onSubmit={(e) => signUpHandler(e)}
      >
        <div className="text-2xl  font-bold mb-2">
          Welcome to EXPENSE TRACKER!
        </div>
        User : {user === null ? "Logged out!" : user.email}
        <div className="text-lg mb-2">Signup to continue</div>
        {/* Form Input fields */}
        <div className="m-4 w-full">
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <div className="font-bold">Email Address</div>
            <input
              className="bg-gray-100 text-gray-600 rounded-md py-3 px-4 my-4 shadow-md  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              style={{ width: "75%" }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div
            className="flex flex-col items-center relative"
            style={{ width: "100%" }}
          >
            <div className="font-bold">Password</div>

            <input
              className="bg-gray-100 text-gray-600 rounded-md py-3 pl-4 px-4 my-4 shadow-md  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              type={showPassword === true ? "text" : "password"}
              style={{ width: "75%" }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {showPassword === false && (
              <AiFillEye
                className="text-purple-500"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={() => setShowPassword(true)}
              />
            )}
            {showPassword === true && (
              <AiFillEyeInvisible
                className="text-purple-500"
                style={{ width: "50px", height: "50px", cursor: "pointer" }}
                onClick={() => setShowPassword(false)}
              />
            )}
          </div>
        </div>
        <button
          className="px-20 py-3 text-center rounded-xl text-lg bg-purple-500 text-white "
          style={{ width: "75%" }}
        >
          Sign Up
        </button>
      </form>
      <Svg
        className="hidden lg:block"
        style={{
          width: "500px",
          padding: "0",
          marginLeft: "15px",
          position: "absolute",
          right: "5%",
        }}
      />
    </div>
  );
}
