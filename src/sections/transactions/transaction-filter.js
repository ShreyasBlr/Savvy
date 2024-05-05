"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TransactionFilter = ({ onFilter }) => {
  return (
    <Select className="w-24" onValueChange={(value) => onFilter(value)}>
      <SelectTrigger className="w-24">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent className="w-24">
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="income">Income</SelectItem>
        <SelectItem value="expense">Expense</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default TransactionFilter;
