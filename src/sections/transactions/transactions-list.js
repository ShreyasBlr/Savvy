import TransactionCard from "../common/transaction-card";

const TransactionsList = ({ transactions }) => {
  return (
    <div className="flex flex-col gap-3 h-[80dvh] overflow-hidden overflow-y-scroll">
      {transactions.map((transaction) => (
        <TransactionCard key={transaction._id} transaction={transaction} />
      ))}
      ;
    </div>
  );
};
export default TransactionsList;
