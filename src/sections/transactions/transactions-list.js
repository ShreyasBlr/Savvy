import PageConatiner from "@/components/page-container";
import TransactionCard from "../common/transaction-card";

const TransactionsList = ({ transactions }) => {
  return (
    <PageConatiner>
      {transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
    </PageConatiner>
  );
};
export default TransactionsList;
