import Iconify from "@/components/iconify";
import useTheme from "@/hooks/useTheme";
import { currencyformatter } from "@/utils/format-number";
import { format } from "date-fns";

const TransactionCard = ({ transaction }) => {
  const theme = useTheme();
  const { transaction_type } = transaction;
  return (
    <div className="p-4 bg-slate-950 rounded-2xl text-slate-200 flex items-center justify-start gap-5">
      {transaction_type === "income" ? (
        <Iconify
          icon="solar:round-arrow-left-down-bold-duotone"
          className="w-9 h-9"
          color={theme.colors.green[500]}
        />
      ) : (
        <Iconify
          icon="solar:round-arrow-right-up-bold-duotone"
          className="w-9 h-9"
          color={theme.colors.red[500]}
        />
      )}
      <div className="w-2/5">
        <h3 className="text-md font-medium truncate">
          {transaction.category?.name}
        </h3>
        <p className="text-sm font-light truncate">{transaction.description}</p>
      </div>
      <div className="ml-auto">
        <h3 className="text-md text-right font-medium">
          {/* {currencyformatter(transaction.amount.$numberDecimal)} */}
          {transaction.amount}
        </h3>
        <p className="text-sm font-light text-ellipsis">
          {format(new Date(transaction.date), "PPP")}
        </p>
      </div>
    </div>
  );
};
export default TransactionCard;
