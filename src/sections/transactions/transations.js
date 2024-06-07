"use client";

import { useState, useEffect, useCallback } from "react";

import TransactionFilter from "./transaction-filter";
import TransactionsList from "./transactions-list";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import getTransactions from "@/services/transactions/get-transactions";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = useCallback(async () => {
    const data = await getTransactions();
    setTransactions(data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const handleFilter = async (type) => {
    const data = await getTransactions({ [type]: true });
    setTransactions(data);
  };

  return (
    <div className="flex flex-col gap-3">
      <CustomBreadcrumbs
        title="Transactions"
        action={<TransactionFilter onFilter={handleFilter} />}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
};
export default Transactions;
