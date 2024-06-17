import GuestGaurd from "@/layouts/auth/guest-guard";
import PreventSwipeBack from "@/layouts/dashboard/prevent-swipe-back";

const LoginLayout = ({ children }) => {
  return (
    <GuestGaurd>
      <PreventSwipeBack />
      <div id="root">{children}</div>
    </GuestGaurd>
  );
};
export default LoginLayout;
