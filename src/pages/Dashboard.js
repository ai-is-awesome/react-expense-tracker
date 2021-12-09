import React, { useState, useRef } from "react";
import theme, { yellow500 } from "./theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from "./Tag";
import { BiErrorCircle } from "react-icons/bi";
import Message from "./Message";
import TransactionRecord from "./TransactionRecord";
import { useEffect } from "react/cjs/react.development";
import Navbar from "./Navbar";
import Input from "./Input";

const { color1, color2, color3, color4 } = theme;

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);
  const [errors, setErrors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [transactions, setTransactions] = useState([]);

  const [formState, setFormState] = useState({
    transactionAmount: "",
    transactionName: "",
    transactionDate: selectedDate,
    tags: [],
  });
  console.log("selectedtags on dash: ", selectedTags);

  if (datePickerRef.current !== null) {
    document.getElementById("datepicker").setAttribute("readonly", "readonly");
  }

  const tagsHandler = (arr) => {
    setSelectedTags(arr);
  };
  const resetForm = () => {
    setSelectedTags([]);
    setFormState({
      transactionAmount: "",
      transactionName: "",
      transactionDate: selectedDate,
      tags: selectedTags,
    });
  };

  const formHander = (e) => {
    e.preventDefault();
    const errors = getFormErrors();
    console.log("if statement reached: ", errors === [], errors);
    setErrors(getFormErrors());
    if (errors.length === 0) {
      const d = {
        amount: formState.transactionAmount,
        name: formState.transactionName,
        tags: selectedTags,
      };

      setTransactions((previousValue) => previousValue.concat(d));
      setFormState({ ...formState, transactionAmount: "" });
      resetForm();
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
        className="flex flex-row sm:flex-column m-4"
        style={{ height: "", width: "" }}
      >
        <form
          className="py-8 px-16 rounded-xl shadow-xl flex flex-col items-center "
          style={{}}
          onSubmit={formHander}
        >
          <div>
            <Input
              placeholder="Enter Amount"
              onChangeHandler={(e) =>
                setFormState({
                  ...formState,
                  transactionAmount: e.target.value,
                })
              }
              value={formState.transactionAmount}
            />
          </div>
          <div>
            <Input
              placeholder="Enter Transaction Name"
              onChangeHandler={(e) =>
                setFormState({ ...formState, transactionName: e.target.value })
              }
              value={formState.transactionName}
            />
          </div>
          <div>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="bg-white shadow-sm  rounded-lg py-3 px-4 my-4"
              id="datepicker"
              ref={datePickerRef}
            />
          </div>

          <Tag tagsHandler={tagsHandler} />
          <div className="flex flex-row justify-center">
            <button
              className="px-20 py-3 text-center rounded-xl text-lg bg-purple-500 text-white"
              // style={{ backgroundColor: yellow500, color: "white" }}
            >
              Submit
            </button>
          </div>

          {errors.length !== 0 && <Message message={errors[0]} />}
        </form>
        {/* Transactions */}

        <div className="flex flex-col items-center w-full  rounded-lg">
          <h1 className="my-4 text-2xl font-bold">Check your transactions!</h1>
          {transactions.map((transaction) => (
            <TransactionRecord
              transactionAmount={transaction.amount}
              transactionDate={formState.transactionDate}
              tags={transaction.tags}
              transactionName={transaction.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
