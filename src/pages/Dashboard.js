import React, { useState } from "react";
import theme from "./theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from "./Tag";

const { color1, color2, color3, color4 } = theme;

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formHander = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ height: "60vh", width: "60vw", margin: "auto" }}
    >
      <form
        className="py-8 px-16 rounded-xl shadow-xl"
        style={{ backgroundColor: color3 }}
        onSubmit={formHander}
      >
        <div>
          <input
            type="text"
            className="bg-gray-100 rounded-lg py-3 px-4 my-4"
            placeholder="Enter Amount"
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-100 rounded-lg py-3 px-4 my-4"
            placeholder="Enter Transaction Name"
          />
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="bg-gray-100 rounded-lg py-3 px-4 my-4"
          />
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-100 rounded-lg py-3 px-4 my-4"
            placeholder="Enter Tags(if any)"
          />
        </div>

        <Tag />

        <div className="flex flex-row justify-center">
          <button
            className="px-5 py-3 text-center rounded-xl"
            style={{ backgroundColor: color1 }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
