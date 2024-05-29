import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";

const IncomeExpenseWidget = () => {
  return (
    <div className="flex flex-col gap-2 my-5">
      <h5 className="text-slate-200 text-md font-semibold">
        {format(new Date(), "MMMM yyyy")}
      </h5>
      {/* <Tabs defaultValue="expense" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="expense">
            Expenses
          </TabsTrigger>
          <TabsTrigger className="w-full" value="income">
            Income
          </TabsTrigger>
        </TabsList>
        <TabsContent value="expense"></TabsContent>
        <TabsContent value="income">This month&#39;s income</TabsContent>
      </Tabs> */}

      <div className="flex gap-2 w-full">
        <div className="flex flex-col gap-2 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-green-500 text-sm font-normal">Total Income</h5>
          <h5 className="text-green-500 text-xl font-medium">
            &#8377; 1,00,000
          </h5>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-slate-950 p-4 w-full">
          <h5 className="text-red-600 text-sm font-normal">Total Expenses</h5>
          <h5 className="text-red-600 text-xl font-medium">&#8377; 1,00,000</h5>
        </div>
      </div>
    </div>
  );
};
export default IncomeExpenseWidget;