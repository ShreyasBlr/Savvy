import Navbar from "./navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main className="p-3 h-[89dvh]">{children}</main>
      <Navbar />
    </>
  );
};
export default DashboardLayout;
