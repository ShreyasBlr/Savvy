import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import PageConatiner from "@/components/page-container";
import AddExpenseForm from "../add-expense-form";

const AddExpenseView = () => {
  return (
    <div className="flex flex-col gap-3">
      <CustomBreadcrumbs title="Add Expense" />
      <PageConatiner>
        <AddExpenseForm />
      </PageConatiner>
    </div>
  );
};
export default AddExpenseView;
