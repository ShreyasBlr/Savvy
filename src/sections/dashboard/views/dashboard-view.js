import Header from "@/components/header";
import IncomeExpenseWidget from "../income-expense-widget";
import RecentTransactions from "../recent-transations";

const DashboardView = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <IncomeExpenseWidget />
        <RecentTransactions />
      </div>
    </>
  );
};

export default DashboardView;
