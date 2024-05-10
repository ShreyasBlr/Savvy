import Navbar from "./navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="max-w-md mx-auto">
      <main className="p-3 h-[89dvh]">{children}</main>
      <Navbar />
    </div>
  );
};
export default DashboardLayout;
