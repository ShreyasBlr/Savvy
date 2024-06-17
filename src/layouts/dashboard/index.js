import Navbar from "./navbar";
import PreventSwipeBack from "./prevent-swipe-back";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <PreventSwipeBack />
      <main className="px-3 pt-[10px] pb-[120px] h-[100dvh]">{children}</main>
      <Navbar />
    </>
  );
};
export default DashboardLayout;
