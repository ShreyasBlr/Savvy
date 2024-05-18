import GuestGaurd from "@/layouts/auth/guest-guard";

const LoginLayout = ({ children }) => {
  return <GuestGaurd>{children}</GuestGaurd>;
};
export default LoginLayout;
