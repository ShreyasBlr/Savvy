"use client";

import { useState } from "react";

import transactions from "@/data/transactions";

import TransactionFilter from "./transaction-filter";
import TransactionsList from "./transactions-list";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs";

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
      <CustomBreadcrumbs
        title="Transactions"
        action={<TransactionFilter onFilter={filterTransactions} />}
      />
      <TransactionsList transactions={filteredData} />
    </div>
  );
};
export default RecentTransactions;
