import GuestGaurd from "@/layouts/auth/guest-guard";
import PreventSwipeBack from "@/layouts/dashboard/prevent-swipe-back";

const LoginLayout = ({ children }) => {
  return (
    <GuestGaurd>
      <PreventSwipeBack />
      {children}
    </GuestGaurd>
  );
};
export default LoginLayout;
