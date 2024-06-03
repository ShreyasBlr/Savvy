import CustomBreadcrumbs from "@/components/custom-breadcrumbs";
import PageConatiner from "@/components/page-container";
import AddIncomeForm from "../add-income-form";

const AddIncomeView = () => {
  return (
    <div className="flex flex-col gap-3">
      <CustomBreadcrumbs title="Add Income" />
      <PageConatiner>
        <AddIncomeForm />
      </PageConatiner>
    </div>
  );
};
export default AddIncomeView;
