import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SmartButton from "../components/SmartButton";
import AuthContext from "../Context/AuthContext";
import { ReactComponent as Svg } from "./drawing.svg";
import Message from "./Message";
import Navbar from "./Navbar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    login(email, password)
      .then(() => {
        console.log("logged innnn");
      })
      .catch((e) => {
        console.log("error logging in: ", e.message);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="lg:h-screen bg-gray-100">
      <Navbar />
      <div className="flex justify-center items-center">
        <form
          className="bg-white  md:w-1/2 w-full  rounded-md flex flex-col shadow-md items-center justify-center p-4 pb-24 mr-8 lg:w-1/3 "
          onSubmit={(e) => loginHandler(e)}
        >
          <div className="text-2xl font-bold mb-2">Login to Continue!</div>
          {/* Form Input fields */}
          <div className="m-4 w-full">
            <div
              className="flex flex-col items-center"
              style={{ width: "100%" }}
            >
              <div className="font-bold">Email Address</div>
              <input
                className="bg-gray-100 text-gray-600 rounded-md py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                style={{ width: "75%" }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div
              className="flex flex-col items-center"
              style={{ width: "100%" }}
            >
              <div className="font-bold">Password</div>
              <input
                className="bg-gray-100 text-gray-600 rounded-md py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                style={{ width: "75%" }}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <SmartButton buttonText="Login!" loading={loading} />
          {error !== "" && <Message message={error} type={"error"} />}
          <Link className="mt-8  text-purple-400" to={"/signup"}>
            Don't have an account? Sign up
          </Link>
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
    </div>
  );
}
