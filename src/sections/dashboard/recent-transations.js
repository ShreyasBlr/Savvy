"use client";
import { Button } from "@/components/ui/button";
import Iconify from "@/components/iconify";
import TransactionCard from "../common/transaction-card";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import getTransactions from "@/services/transactions/get-transactions";

const RecentTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = useCallback(async () => {
    const data = await getTransactions();
    setTransactions(data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h5 className="text-slate-200 text-md font-semibold">
          Recent transactions
        </h5>
        <Link href="/dashboard/transactions">
          <Button variant="ghost" className="text-slate-200">
            View all
            <Iconify
              icon="solar:alt-arrow-right-linear"
              className="ml-2 w-4 h-4"
            />
          </Button>
        </Link>
      </div>
      <div className="flex flex-col gap-2 h-[calc(100dvh-375px)] overflow-y-scroll no-scrollbar">
        {transactions.map((transaction) => (
          <TransactionCard key={transaction._id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
export default RecentTransactions;
