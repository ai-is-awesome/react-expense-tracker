import React, { useState, useRef, useContext } from "react";
import theme, { yellow500 } from "./theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Tag from "./Tag";
import { BiErrorCircle } from "react-icons/bi";
import Message from "./Message";
import TransactionRecord from "./TransactionRecord";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Input from "./Input";
import AuthContext from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { getAllTransactions, addTransaction } from "../firebase/db";
import Spinner from "./Spinner";

const { color1, color2, color3, color4 } = theme;
export default function Dashboard() {
  const { user, authReady } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const datePickerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(true);
  const [loadingFormSubmit, setLoadingFormSubmit] = useState(false);

  const [formState, setFormState] = useState({
    transactionAmount: "",
    transactionName: "",
    transactionDate: selectedDate,
    tags: [],
  });

  if (datePickerRef.current !== null) {
    document.getElementById("datepicker").setAttribute("readonly", "readonly");
  }

  if (authReady === true && user === null) {
    navigate("/login");
  }

  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  const getTransactions = () => {
    getAllTransactions(user.uid).then((snapshot) => {
      snapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();

        setTransactions((previousTransaction) =>
          previousTransaction.concat(data)
        );
      });
      setLoadingTransactions(false);
    });
  };

  useEffect(() => {
    if (authReady === true && user !== null) {
      setTransactions([]);
      getTransactions();
    }
  }, [authReady]);

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
    console.log("errors: ", errors);
    setMessages(getFormErrors());
    if (errors.length === 0) {
      setLoadingFormSubmit(true);
      const d = {
        transactionAmount: Number(formState.transactionAmount),
        transactionName: formState.transactionName,
        tags: selectedTags,
        transactionDate: selectedDate,
        firebaseUID: user.uid,
      };

      addTransaction(d)
        .then((ref) => {
          setTransactions((previousValue) => [d, ...previousValue]);
          setMessages((prev) =>
            prev.concat({ message: "Successfully created", type: "success" })
          );
        })
        .catch((e) =>
          setMessages((prev) =>
            prev.concat({ message: e.message, type: "error" })
          )
        )
        .finally(() => {
          setLoadingFormSubmit(false);
          resetForm();
        });
    }
  };

  const getFormErrors = () => {
    const transactionAmount = formState.transactionAmount;
    if (isNaN(+transactionAmount) || transactionAmount === "") {
      return [{ message: "Please enter a valid amount", type: "error" }];
    } else {
      return [];
    }
  };

  if (authReady === false) {
    return (
      <div className="flex flex-row items-center justify-center h-screen">
        <Spinner spinnerType={"PulseLoader"} spinnerSize={"lg"} />
      </div>
    );
  }
  if (authReady === true && user === null) {
    return <div>You must be logged in to view contents of this page!</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="flex lg:flex-row flex-col lg:items-start items-center m-4">
        {/* since form is absolute positioned, the transactions won't be centered properly so an empty div with a height to center the form */}
        <div style={{ width: "300px" }}></div>
        <form
          className="py-8 px-16 rounded-xl shadow-xl flex flex-col items-center  bg-white block lg:fixed"
          style={{ width: "350px" }}
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
          <div className="flex flex-col justify-center">
            <button
              className="px-20 py-3 text-center rounded-xl text-lg bg-purple-500 text-white disabled:text-purple-600"
              type="submit"
              disabled={true ? loadingFormSubmit : false}
            >
              Submit
            </button>
            {loadingFormSubmit === true && (
              <div className="flex flex-col items-center ml-2 mt-2">
                <Spinner spinnerType="BeatLoader" />
              </div>
            )}
          </div>

          {messages.length !== 0 && (
            <Message
              message={messages[0]["message"]}
              type={messages[0]["type"]}
            />
          )}
        </form>
        {/* Transactions */}

        <div className="flex flex-col items-center w-full  rounded-lg">
          <h1 className="my-4 text-2xl font-bold">Check your transactions!</h1>

          {loadingTransactions === false &&
            transactions.map((transaction) => (
              <TransactionRecord
                transactionAmount={transaction.transactionAmount}
                transactionDate={transaction.transactionDate}
                tags={transaction.tags}
                transactionName={transaction.transactionName}
              />
            ))}
          {loadingTransactions === true && (
            <div className="mt-8">
              <Spinner spinnerType="PulseLoader" spinnerSize={"lg"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
