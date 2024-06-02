const PageConatiner = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 h-[calc(100dvh-160px)] pb-4 overflow-hidden overflow-y-scroll">
      {children}
    </div>
  );
};
export default PageConatiner;
