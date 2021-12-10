import React from "react";
import { ReactComponent as Svg } from "./drawing.svg";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <form className="bg-white w-1/3 h-1/2 rounded-md flex flex-col shadow-md items-center p-4 mr-8">
        <div className="text-2xl  font-bold mb-2">Login to Continue!</div>
        {/* Form Input fields */}
        <div className="m-4 w-full">
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <div className="font-bold">Email Address</div>
            <input
              className="bg-gray-100 text-gray-600 rounded-md py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              style={{ width: "75%" }}
            />
          </div>
          <div className="flex flex-col items-center" style={{ width: "100%" }}>
            <div className="font-bold">Password</div>
            <input
              className="bg-gray-100 text-gray-600 rounded-md py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              style={{ width: "75%" }}
            />
          </div>
        </div>
        <button
          className="px-20 py-3 text-center rounded-xl text-lg bg-purple-500 text-white "
          style={{ width: "75%" }}
        >
          Login!
        </button>
      </form>
      <Svg
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
