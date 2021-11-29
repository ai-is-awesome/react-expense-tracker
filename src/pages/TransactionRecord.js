import React from "react";
import TagButton from "./TagButton";
export default function TransactionRecord({
  transactionName,
  transactionAmount,
  transactionDate,
  tags,
}) {
  return (
    //   Full pagd div
    <div className="">
      {/* Container*/}
      <div
        className="shadow-lg px-4 py-2 rounded-lg mb-4"
        style={{
          width: "30vw",
          backgroundColor: "rgb(238, 235, 221)",
        }}
      >
        <div className="flex flex-row justify-between">
          <div className="text-xl font-bold">₹ {transactionAmount}</div>
          <div className="text-lg" style={{ color: "#007774" }}>
            {transactionName}
          </div>
        </div>
        <div>{JSON.stringify(transactionDate.toString())}</div>

        {tags.map((tag) => (
          <TagButton tagName={tag} />
        ))}

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
