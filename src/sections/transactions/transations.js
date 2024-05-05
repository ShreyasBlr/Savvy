"use client";

import { useState } from "react";

import transactions from "@/data/transactions";

import TransactionFilter from "./transaction-filter";
import TransactionsList from "./transactions-list";

const RecentTransactions = () => {
  const [filteredData, setFilteredData] = useState(transactions);
  const filterTransactions = (value) => {
    setFilteredData(
      value === "all"
        ? transactions
        : transactions.filter((transaction) => transaction.type === value)
    );
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-200 text-xl font-semibold">Transactions</h2>
        <TransactionFilter onFilter={filterTransactions} />
      </div>
      <TransactionsList transactions={filteredData} />
    </div>
  );
};
export default RecentTransactions;
