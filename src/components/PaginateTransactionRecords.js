import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import TransactionRecord from "../pages/TransactionRecord";

export default function PaginateTransactionRecords(props) {
  const { transactionsPerPage, transactions } = props;
  const [currentTransactions, setCurrentTransactions] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [transactionOffset, setTransactionOffset] = useState(0);

  useEffect(() => {
    const endOffset = transactionOffset + transactionsPerPage;
    setCurrentTransactions(transactions.slice(transactionOffset, endOffset));
    setPageCount(Math.ceil(transactions.length / transactionsPerPage));
  }, [transactionOffset, transactionsPerPage]);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * transactionsPerPage) % transactions.length;
    setTransactionOffset(newOffset);
  };
  return (
    <div>
      {currentTransactions.map((t) => {
        <TransactionRecord />;
      })}
      <ReactPaginate />
    </div>
  );
}
