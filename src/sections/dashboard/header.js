import AccountPopover from "./account-popover";
import Greeting from "./greeting";

const Header = () => {
  return (
    <div className="flex items-center justify-between max-w-md mx-auto">
      <Greeting />
      <AccountPopover />
    </div>
  );
};
export default Header;
