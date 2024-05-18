import Header from "./header";
import Navbar from "./navbar";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-3 pt-[80px] pb-[200px] h-[100dvh]">{children}</main>
      <Navbar />
    </>
  );
};
export default DashboardLayout;
