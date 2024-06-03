import Iconify from "./iconify";

const CustomBreadcrumbs = ({ title, action }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button>
          <Iconify icon="ion:arrow-back-outline" height={20} />
        </button>
        <h2 className="text-slate-200 text-xl font-semibold">{title}</h2>
      </div>
      {action}
    </div>
  );
};
export default CustomBreadcrumbs;
