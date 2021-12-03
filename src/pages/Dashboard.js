import React, { useState, useRef } from "react";
import theme from "./theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from "./Tag";
import { BiErrorCircle } from "react-icons/bi";
import Message from "./Message";
import TransactionRecord from "./TransactionRecord";
import { useEffect } from "react/cjs/react.development";
import Navbar from "./Navbar";

const { color1, color2, color3, color4 } = theme;

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);
  const [errors, setErrors] = useState([]);
  const [formState, setFormState] = useState({
    transactionAmount: "",
    transactionName: "",
    transactionDate: selectedDate,
    tags: [],
  });

  const [transactions, setTransactions] = useState([]);
  if (datePickerRef.current !== null) {
    document.getElementById("datepicker").setAttribute("readonly", "readonly");
  }

  const formHander = (e) => {
    e.preventDefault();
    const errors = getFormErrors();
    console.log("if statement reached: ", errors === [], errors);
    setErrors(getFormErrors());
    if (errors.length === 0) {
      const d = {
        amount: formState.transactionAmount,
      };

      console.log("setting transactions!");

      setTransactions((previousValue) => previousValue.concat(d));
      setFormState({ ...formState, transactionAmount: "" });
    }
  };

  const getFormErrors = () => {
    const transactionAmount = formState.transactionAmount;
    if (isNaN(+transactionAmount) || transactionAmount === "") {
      return ["Please enter a valid amount"];
    } else {
      return [];
    }
  };

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col justify-center items-center"
        style={{ height: "", width: "60vw", margin: "auto" }}
      >
        <form
          className="py-8 px-16 rounded-xl shadow-xl flex flex-col items-center bg-gray-100"
          style={{ width: "70%" }}
          onSubmit={formHander}
        >
          <div>
            <input
              type="text"
              className="bg-gray-100 rounded-lg py-3 px-4 my-4"
              placeholder="Enter Amount"
              onChange={(e) =>
                setFormState({
                  ...formState,
                  transactionAmount: e.target.value,
                })
              }
              value={formState.transactionAmount}
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
              id="datepicker"
              ref={datePickerRef}
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-100 rounded-lg py-3 px-4 my-4"
              placeholder="Enter Tags(if any)"
            />
          </div>
          <Tag onChange={() => ""} />
          <div className="flex flex-row justify-center">
            <button
              className="px-20 py-3 text-center rounded-xl"
              style={{ backgroundColor: color1 }}
            >
              Submit
            </button>
          </div>

          {errors.length !== 0 && <Message message={errors[0]} />}
          {errors.length === 0 ? "LEN 0" : errors.length}
        </form>
        {/* Transactions */}
        <h1 className="mt-4 text-2xl font-bold">Check your transactions!</h1>
        {transactions.map((transaction) => (
          <TransactionRecord
            transactionAmount={transaction.amount}
            transactionDate={formState.transactionDate}
            tags={formState.tags}
          />
        ))}
      </div>
    </div>
  );
}
