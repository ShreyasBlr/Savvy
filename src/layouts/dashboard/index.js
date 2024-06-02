import Header from "../../components/header";
import Navbar from "./navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <main className="px-3 pt-[10px] pb-[120px] h-[100dvh]">{children}</main>
      <Navbar />
    </>
  );
};
export default DashboardLayout;
