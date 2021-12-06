import React from "react";
import TagButton from "./TagButton";
import theme from "./theme";
export default function TransactionRecord({
  transactionName,
  transactionAmount,
  transactionDate,
  tags,
}) {
  return (
    //   Full page div
    <div className="">
      {/* Container*/}
      <div
        className="shadow-lg text-white px-4 py-2 rounded-lg mb-4"
        style={{
          width: "30vw",
          backgroundImage:
            "linear-gradient(to right, rgb(186, 173, 117), rgb(153, 139, 77))",
        }}
      >
        <div className="flex flex-row justify-between">
          <div className="text-xl font-bold">₹ {transactionAmount}</div>
          <div className="text-lg" style={{ color: "#007774" }}>
            {transactionName}
          </div>
        </div>
        <div>{transactionDate.toDateString()}</div>

        {tags && tags.map((tag) => <TagButton tagName={tag} />)}

        {/* <button className="bg-gray-100 mr-2 rounded-lg px-2 py-1 mb-2 mt-2">
          Tag
        </button>
        <button className="bg-gray-100 mr-2 rounded-lg px-2 py-1 mb-2">
          Tag
        </button>
        <button className="bg-gray-100 mr-2  px-2 py-1 mb-2 rounded-lg">
          Tagfff
        </button> */}
      </div>
    </div>
  );
}
