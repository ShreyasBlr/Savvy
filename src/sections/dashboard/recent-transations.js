import transactions from "@/data/transactions";
import { Button } from "@/components/ui/button";
import Iconify from "@/components/iconify";
import TransactionCard from "../common/transaction-card";

const RecentTransactions = () => {
  const recentTransactions = transactions.slice(0, 4);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h5 className="text-slate-200 text-md font-semibold">
          Recent transactions
        </h5>
        <Button variant="ghost" className="text-slate-200">
          View all
          <Iconify
            icon="solar:alt-arrow-right-linear"
            className="ml-2 w-4 h-4"
          />
        </Button>
      </div>
      {recentTransactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
};
export default RecentTransactions;
