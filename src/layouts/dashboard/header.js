import AccountPopover from "./account-popover";
import Greeting from "./greeting";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 max-w-md mx-auto">
      <Greeting />
      <AccountPopover />
    </div>
  );
};
export default Header;
